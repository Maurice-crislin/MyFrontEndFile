let h1 = document.createElement('h1')
let h2 = document.createElement('h2')

h1.className = 'h1'
h1.textContent = 'this is h1'

let observer = new MutationObserver(
  (mutationRecord, mutationObserver) => {
    console.log(mutationRecord)
  },
)
// 0: MutationRecord
// addedNodes: NodeList []
// attributeName: "class"
// attributeNamespace: null
// nextSibling: null
// oldValue: "h1"
// previousSibling: null
// removedNodes: NodeList []
// target: h1.h11
// type: "attributes"
// [[Prototype]]: MutationRecord

// 1: MutationRecord
// addedNodes: NodeList []
// attributeName: "class"
// attributeNamespace: null
// nextSibling: null
// oldValue: null
// previousSibling: null
// removedNodes: NodeList []
// target: h2.h2
// type: "attributes"
// [[Prototype]]: MutationRecord
// 初次检测
observer.observe(h1, {
  attributes: true,
  attributeOldValue:true
})
// 再次检测
observer.observe(h2, {
  attributes: true,
})

h1.className = 'h11'
h1.textContent = 'this is h11'
h2.className = 'h2'
h2.textContent = 'this is h2'

// 即使没有把 h1 和 h2 节点添加的文档中，上面的对 className 的修改，也可以触发回调执行
document.body.appendChild(h1)
document.body.appendChild(h2)