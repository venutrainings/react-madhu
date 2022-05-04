
import { useEffect, useReducer,useRef } from 'react';
// import { bindActionCreators } from 'redux';
import './App.css';

const initialState = {count:0,isrunning: false}

function reducer (state,action) {
  switch(action.type){
    case 'start': return {...state,isrunning:true}
    case 'stop' : return {...state,isrunning:false}
    case 'reset': return {...state,count:0,isrunning:false}
    case 'tick': return {...state,count:state.count+1}
    default :alert('Error')
  }
}


function App () {
  const [state,dispatch] = useReducer(reducer,initialState)
  const timerRef = useRef(0)
  

  useEffect(()=>{
    if (!state.isrunning){
      return;
    }
    timerRef.current= setInterval(()=> dispatch({type:'tick'}),1000)
    return()=>{
      clearInterval(timerRef.current)
    timerRef.current=0
    }
  },[state.isrunning])

  return(
    <div className='container'>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:'start'})}>Start</button>
      <button onClick={()=>dispatch({type:'stop'})}>Stop</button>
      <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default App