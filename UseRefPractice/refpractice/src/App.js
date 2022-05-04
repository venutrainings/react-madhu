import React,{useState,useEffect,useRef} from 'react'
import './App.css';

function App() {
  const [input1,setInput1] = useState('')
  const [input2,setInput2] = useState('')
  const prevValue = useRef('')
  const count =useRef(0)
  const focusElement = useRef()

  useEffect(()=>{
    prevValue.current = input1
    count.current =count.current + 1
  })

  const focusinput=()=>{
    focusElement.current.focus()
  }
  return(
    <div className='container'>
      <input type="text" value={input1} ref={focusElement} placeholder="Enter The value to check" onChange={(event)=>setInput1(event.target.value)} />
      <input type="text" placeholder="get Focus on this on click"  onChange={(event)=>setInput2(event.target.value)}/>
      <button onClick={focusinput}>Focus on Input</button>
      <p>Input Value is :{input1}</p>
      <p>input2 value is : {input2}</p>
      <p>Previout input1 value is :{prevValue.current}</p>
      <p>Count of the Characters you Entered( Rendered Times ) : {count.current}</p>
    </div>
  )
}

export default App;
