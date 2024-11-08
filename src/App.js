import { Typography, Button, Divider } from '@mui/material';
import './App.css';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Add, CancelPresentation, Close, DisabledByDefault, Remove} from '@mui/icons-material';
// import { Routes } from 'react-router-dom';

// calculator
import { useState, useRef } from 'react';

function App() {
  
const inputRef = useRef(null);
const resultRef = useRef(0);
const [answer, setAnswer] = useState(0);
const [sign, setSign] = useState('')
//
const add = (e) =>{
  e.preventDefault();
  
  setAnswer(answer + Number(inputRef.current.value))
  setSign('+')
}
const sub = (e) =>{
  e.preventDefault();
  
  setAnswer(answer - Number(inputRef.current.value))
  setSign('-')
}
const div = (e) =>{
  e.preventDefault();
  
  setAnswer(answer / Number(inputRef.current.value))
  setSign('/ ')
}
const mult = (e) =>{
  e.preventDefault();
  
  setAnswer(answer * Number(inputRef.current.value))
  setSign('*')
}
const clear = (e) =>{
  e.preventDefault();
  inputRef.current.value = null
   
}
const clearAll = (e) =>{
  e.preventDefault();
  inputRef.current.value = null
  setAnswer( null)
  setSign()
   
}
  return(
    // <Routes>
    <Box sx={{bgcolor:"white", height:'95vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <Box sx=
      {{
        bgcolor:'#f2f5f5', 
        width:'367px', 
        minWidth:'367px',
        borderRadius:1,
        border:'1px solid lightblue',
        boxShadow:2,
        p:3,
        overflow:'auto'
      }}> 
    <Typography>Simple Calculator</Typography>
    <Divider sx={{mb:5}}/>
    <form className='form'>
      <label htmlFor='input'> Input : </label>
      <input 
      ref = {inputRef}
      type='number'
      name='input'
      className='form-control'
      style={{marginBottom:10, marginTop:5}}
      />

      <Typography>Answer :</Typography>
          <Box>
          <p ref= {resultRef}>{answer}</p>
          </Box>

      <Box sx={{mb:1}}>
      <Button sx={{bgcolor:'#2262bd', color:'white', mr:1}} onClick={add}  endIcon={<Add/>}>Add</Button>
      <Button sx={{bgcolor:'#2262bd', color:'white', mr:1}} onClick={sub}  endIcon={<Remove/>}>Sub</Button>
      <Button sx={{bgcolor:'#2262bd', color:'white', mr:1}} onClick={div}  >Divide</Button>
      <Button sx={{bgcolor:'#2262bd', color:'white', mr:1}} onClick={mult}  endIcon={<Close/>}>Mult</Button>
      </Box>
      <Box>
      <Button sx={{bgcolor:'#ab5c1b', color:'white', mr:1, width:122}} onClick={clear}  >Clear</Button>
      <Button sx={{bgcolor:'#ab2a1b', color:'white', width:179}} onClick={clearAll}  >Clear All</Button>
      </Box>

      {/* <button >Add</button> */}
      {/* <button onClick={sub}>Subtract</button>
      <button onClick={div}>Divide</button>
      <button onClick={mult}>Multiply</button>
      <button onClick={clear}>Clear Input</button>
      <button onClick={clearAll}>Clear all</button> */}

    </form>
    
    
    </Box>
    </Box>
    // </Routes>
    
  )

}

export default App;
