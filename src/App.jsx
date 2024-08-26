
import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {

  const [Principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest] = useState(0)

  const [isPrincipleInvalid, setIsPrincipleInvalid] = useState(false)
  const [isRateInvalid,setIsRateInvalid] = useState(false)
  const [isYearInvalid,setIsYearInvalid] = useState(false)


  // inpput vallidation function
  const validateInput = (inputTag)=>{

    // object destructuring , const {key1,key2...} = object-name
    const {name,value} = inputTag
    console.log(name,value);
    console.log(!!value.match(/^[0-9]*[0-9]+$/));
    console.log(!!value.match(/^\d*\.?\d+$/));
    if(name=="principle"){
      setPrinciple(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsPrincipleInvalid(false) : setIsPrincipleInvalid(true)

    }else if(name=='rate'){
      setRate(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsRateInvalid(false) : setIsRateInvalid(true)
    }else if(name=='year'){
      setYear(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsYearInvalid(false) : setIsYearInvalid(true)
    }
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    console.log("Inside handleCalculate function");
    if(Principle && rate && year){
      // calculate

      setInterest(Principle*rate*year/100)

    }else{
      alert("please fill the form completetly")
    }


  }

  const handleReset = ()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setPrinciple(0)
    setIsPrincipleInvalid(false)
    setIsRateInvalid(false)
    setIsYearInvalid(false)
  }

  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{ width: '600px' }} className='bg-light rounded p-5'>
        <h4>Simple Interest Calculator App</h4>
        <p>Caluclate your sumple interest easily</p>
        <div className='d-flex flex-column text-light justify-content-center align-items-center bg-warning shadow p-3 rounded'>
          <h1>₹ {interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>

        </div>
        <form className='mt-5'>
          <div className='mb-3'>
            <TextField  value={Principle || ""} onChange={e=>validateInput(e.target)} name='principle' id="outlined-basic" className='w-100' label="₹ Principle Amount" variant="outlined" />
          </div>
          {
            isPrincipleInvalid &&
            <div className="mb-3 text-danger fw-bolder">Invalid Principle Amount</div>
          }

          <div className='mb-3'>
            <TextField value={rate || ""} onChange={e=>validateInput(e.target)} name='rate' id="outlined-basic" className='w-100' label="Rate of Interest (p.a)%" variant="outlined" />
          </div>

          {
            isRateInvalid &&
            <div className='mb-3 text-danger fw-bolder'>Invalid Rate</div>
          }
          <div className='mb-3'>
            <TextField value={year || ""} onChange={e=>validateInput(e.target)} name='year' id="outlined-basic" className='w-100' label="Time Period (Yr)" variant="outlined" />
          </div>
          {
            isYearInvalid &&
            <div className="mb-3 text-danger fw-bolder">Invalid Principle Amount</div>
          }
          <Stack direction="row" spacing={2}>
            <Button disabled={isPrincipleInvalid || isRateInvalid || isYearInvalid} type='submit' onClick={handleCalculate} style={{ width: '50%', height: '70px' }} className='bg-dark' variant="contained">CALCULATE</Button>
            <Button onClick={handleReset} style={{ width: '50%', height: '70px' }} variant="outlined">RESET</Button>
          </Stack>
        </form>

      </div>
    </div>
  )
}

export default App
