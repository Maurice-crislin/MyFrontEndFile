import {useState} from 'react';

export default function UntrustedComponent() {
  const [list, setList] = useState([1,2,3])

  // 为模拟错误，此处故意赋值为null
  function onClick() {
    setList(null)
  }

  return (
    <div>
      <h3>第三方组件</h3>
      <button onClick={onClick}>点击模拟触发错误</button>
      <ul>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}

