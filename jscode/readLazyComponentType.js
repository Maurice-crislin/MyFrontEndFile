// Pending = 0, Resolved = 1, Rejected = 2
export function readLazyComponentType<T>(lazyComponent: LazyComponent<T>): T {
    const status = lazyComponent._status;
    const result = lazyComponent._result;
    switch (status) {
      case Resolved: {
        const Component: T = result;
        return Component;
      }
      case Rejected: {
        const error: mixed = result;
        throw error;
      }
      case Pending: {
        const thenable: Thenable<T, mixed> = result;
        throw thenable;
      }
      default: { // lazyComponent 首次被渲染
        lazyComponent._status = Pending;
        const ctor = lazyComponent._ctor;
        const thenable = ctor();
        thenable.then(
          moduleObject => {
            if (lazyComponent._status === Pending) {
              const defaultExport = moduleObject.default;
              lazyComponent._status = Resolved;
              lazyComponent._result = defaultExport;
            }
          },
          error => {
            if (lazyComponent._status === Pending) {
              lazyComponent._status = Rejected;
              lazyComponent._result = error;
            }
          },
        );
        // Handle synchronous thenables.
        switch (lazyComponent._status) {
          case Resolved:
            return lazyComponent._result;
          case Rejected:
            throw lazyComponent._result;
        }
        lazyComponent._result = thenable;
        throw thenable;
      }
    }
  }
  