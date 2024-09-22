import './App.css';
import { useState } from 'react';
// calculator
/*
add, input , result
*/


function App() {

const [result, setResult] = useState(0)
const [value, setValue] = useState(0)

const Add = (e) =>{
  e.preventDefault();
  setResult((result)=>{
    return(result + Number(value))
  })
}

const Minus = (e) =>{
  e.preventDefault();
  setResult((result)=>{
    return(result - Number(value))
  })
}

return(
<>
<h2> Simple Calculator</h2>
<p>Result : {result}</p>

<input
// add here
value={value}
type='number'
pattern='[0-9]'
onChange={(e)=>{setValue(e.target.value)}}
/>

<button onClick={Add}>Add</button>
<button onClick={Minus}>Minus</button>



</>
)

}

export default App;
