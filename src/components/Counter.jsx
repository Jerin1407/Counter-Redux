import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'

function Counter() {
  const dispatch = useDispatch()
  const count = useSelector(state=>state.counterReducer.count)

  return (
    <div className='w-100 d-flex justify-content-center align-items-center'>
      <div className='border rounded p-5 w-25 d-flex justify-content-center align-items-center flex-column shadow mt-3'>
        <h1>{count}</h1>
        <div className='d-flex justify-content-between w-100 mt-5'>
          <button onClick={()=>dispatch(increment())} className='btn btn-success'>Increment</button>
          <button onClick={()=>dispatch(reset())} className='btn btn-info'>Reset</button>
          <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decrement</button>
        </div>
        <div className='d-flex justify-content-between w-100 mt-3'>
        <button onClick={()=>dispatch(incrementByAmount(5))} className='btn btn-primary'>Increment by Amount</button>
        </div>
      </div>
    </div>
  )
}


export default Counter