'use client'

import Header from "@/components/cal/header"
import "@/app/cal/calculator.css"
import UserInput from "@/components/cal/userInput"
import { useState } from "react";
import Result from "@/components/cal/result";

export default function Calculator() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier:string, newValue:number){
    setUserInput((prevUserInput) =>{
        return{
            ...prevUserInput,
            [inputIdentifier]: +newValue
        }
    })
}

  return (<>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange} />
    {inputIsValid ? <Result input={userInput}/> : <p className="center">Please enter a duration greater than zero</p>}
  </>
  )
}

