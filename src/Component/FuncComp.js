import React, { useState } from 'react'

const FuncComp = () => {

    const[count, setCount]= useState(0)

  return (
    <div>
      <h1> This is my functional component with a counter</h1>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count + 1)}}>Click</button>
    </div>
  )
}

export default FuncComp