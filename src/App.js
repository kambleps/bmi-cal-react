import React, { useEffect, useState } from 'react'

const App = () => {
  const [weight,setWeight] = useState("");
  const [height,setHeight] = useState("");
  const [bmi,setBmi] = useState(0);
  const [message,setMessage] = useState("You weight is")

  function calculate(){
  if(weight !== 0 && height !== 0){
  const totalheight = height*height;
  const calculatebmi = weight/totalheight;
  setBmi(calculatebmi.toFixed(5));
  }
  if(bmi !== 0 && bmi < 18.5){
    setMessage("You weight is  Underweight");
  }else if(bmi >= 18.5 && bmi <= 24.9)
  {
    setMessage("Your weight is Normal weight");
  }else if(bmi >= 25 && bmi <= 29.9)
  {
    setMessage("You weight is Overweight");
  }else if(bmi >= 30 && bmi <= 34.9)
  {
    setMessage("You weight is Obesity Class I");
  }else if(bmi >= 35 && bmi <= 39.9)
  {
    setMessage("You weight is Obesity Class II");
  }else if(bmi >= 40)
  {
    setMessage("You weight is Obesity Class III");
  }
  }
  return (
    <div className='main-div'>
      <div className='child-div'>
      <label for="weight">Enter Your Weight</label>
      <input type='number' id="weight" placeholder='Enter Your Weight in Kg' value={weight} onChange={(e)=>setWeight(e.target.value)} ></input>
      <label for="height">Enter Your Height</label>
      <input type='number' id='height' placeholder='Enter Your Height in m' value={height} onChange={(e)=>setHeight(e.target.value)} ></input>
      <button onClick={calculate}>BMI Calculator</button>
      <p>Your BMI is : {bmi}</p>
      <p>{message}</p>
      </div>
    </div>
  )
}

export default App;
