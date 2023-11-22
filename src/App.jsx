import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  //js code
  //creating states of all variables
  const [Principle, Setprinciple] = useState(0); //initail values set to 0
  const [Interest, SetInterest] = useState(0);
  const [Rate, SetRate] = useState(0);
  const [Year, SetYear] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault(); // to stop refreshing of the page 
    console.log("===Principle Amount===");
    console.log(Principle);
    console.log("===Rate Of Interest===");
    console.log(Rate);
    console.log("===Year===");
    console.log(Year);
    let result = Principle * Year * Rate / 100;//simple interest calculation
    console.log(result);
    SetInterest(result);
  }
  function clearValues(){
    Setprinciple(0);
    SetRate(0);
    SetYear(0);
    SetInterest(0);
  }
  return (
    <div className='d-flex justify-content-center align-items-center w-100 mt-5' style={{ height: "90vh" }}>
      <div style={{ width: "450px" }} className='bg-light p-5 rounded'>
        <h3>
          Simple Interest App
        </h3>
        <p>Calculate your simple interest easily</p>
        <div style={{ height: "100px" }} className=' flex-column mt-5 bg-warning d-flex justify-content-center align-items-center w-100 rounded'>
          <h1>{'\u20B9'}{Interest}</h1>{/* displaying final value */}
          <p style={{ color: "maroon" }}>Total Simple Interest</p>
        </div>
        <form action="" className='mt-3' onSubmit={handleSubmit}>{/* handleSubmit is a function in onSubmit which is defined on top */}
          <div className='mb-3'>
            <TextField id="outlined-basic" label="Principle Amount" variant="outlined" className='w-100' value={Principle}
              onChange={(e) => Setprinciple(e.target.value)} /> {/*  to get the initial value 0 which has beeen set already.from there we take the value*/}
          </div>
          <div className='mb-3'>
            <TextField id="outlined-basic" label="Rate of Interest (p.a)%" variant="outlined" className='w-100' value={Rate}
              onChange={(e) => SetRate(e.target.value)} />
          </div>
          <div className='mb-3'>
            <TextField id="outlined-basic" label="Year (Yr)" variant="outlined" className='w-100' value={Year}
              onChange={(e) => SetYear(e.target.value)} />
          </div>
          <div className='mt-5'>
            <Stack direction="row" spacing={2}>
              <Button style={{ height: "50px", width: "200px" }} variant="contained" className='bg-success' type="submit">CALCULATE</Button>
              <Button style={{ height: "50px", width: "200px", color: "blue" }} variant="contained" className='bg-light' onClick={clearValues}>RESET</Button>

            </Stack>

          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
