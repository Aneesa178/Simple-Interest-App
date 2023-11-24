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
  const [isPrinciple, setIsPrinciple] = useState(true) //new state for validation is created with setIsPrinciple function
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)

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
  function clearValues() {
    Setprinciple(0);
    SetRate(0);
    SetYear(0);
    SetInterest(0);
  }
  const validate = (e) => {
    const { value, name } = e.target; //destructuring 
    console.log(name);
    //regular expression: to check whether a given string has particular pattern
    //should have forward slash at the beginning end and
    //starting of the expression is indicated by ^ (raised)
    //ending is indicated by $
    //if it is a match , we get array as return else null will be returned
    //!! is used to convert result of regular expression to boolean value
    if (!!value.match(/^[0-9]+$/)) {
      if (name === 'principle') {
        Setprinciple(value);
        setIsPrinciple(true)
      }
      else if (name === 'rate') {
        SetRate(value);
        setIsRate(true)
      }
      else {
        SetYear(value)
        setIsYear(true)
      }
    }
    else {
      if (name === 'principle') {
        Setprinciple(value);//each tym it is appended
        setIsPrinciple(false)
      }
      else if (name === 'rate') {
        SetRate(value);
        setIsRate(false)
      }
      else {
        SetYear(value)
        setIsYear(false)
      }
    }
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
            <TextField name="principle" id="outlined-basic" label="Principle Amount" variant="outlined" className='w-100' value={Principle}
              onChange={(e) => validate(e)} />                {/*  to get the initial value 0 which has beeen set already.from there we take the value*/}
          </div>
          {!isPrinciple && //this value is to be false
            <div>
              <p className='text-danger'>Invalid Input</p>
            </div>
          }
          <div className='mb-3'>
            <TextField name="rate" id="outlined-basic" label="Rate of Interest (p.a)%" variant="outlined" className='w-100' value={Rate}
              onChange={(e) => validate(e)} />
          </div>
          {!isRate && //this value is to be false
            <div>
              <p className='text-danger'>Invalid Input</p>
            </div>
          }
          <div className='mb-3'>
            <TextField name="year" id="outlined-basic" label="Year (Yr)" variant="outlined" className='w-100' value={Year}
              onChange={(e) => validate(e)} />
          </div>
          {!isYear && //this value is to be false
            <div>
              <p className='text-danger'>Invalid Input</p>
            </div>
          }
          <div className='mt-5'>
            <Stack direction="row" spacing={2}>
              <Button disabled={ !isPrinciple || !isRate || !isYear} style={{ height: "50px", width: "200px" }} variant="contained" className='bg-success' type="submit">CALCULATE</Button>
              <Button style={{ height: "50px", width: "200px", color: "blue" }} variant="contained" className='bg-light' onClick={clearValues}>RESET</Button>

            </Stack>

          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
