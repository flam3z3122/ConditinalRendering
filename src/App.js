
import './App.css';
import FuncComp from './Component/FuncComp';
import { useState } from 'react';
import ClassComp from './Component/ClassComp';

function App() {

  const [isFunc , setIsFunc] =useState(false);
  const [isClass , setIsClass] =useState(false);


  return (
    <div className="App">
      {
        isFunc ? <FuncComp/> : ''
      }
      {
        isClass ? <ClassComp/> : ''
      }
      <button onClick={()=>{setIsFunc(!isFunc)}}>Functional Component</button>
      <button  onClick={()=>{setIsClass(!isClass)}}>Class Component</button>
    </div>
  );
}

export default App;
