import React, {useState , useEffect} from 'react'

function Calculator() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(0);
  let calcFunc = () => {
    if(operator === '+'){
      const rslt = parseFloat(firstNum) + parseFloat(secondNum);
      setResult(rslt);
    }
    else if(operator === '-'){
      const rslt = parseFloat(firstNum) - parseFloat(secondNum);
      setResult(rslt);
    }
    else if(operator === '*'){
      const rslt = parseFloat(firstNum) * parseFloat(secondNum);
      setResult(rslt);
    }
    else if(operator === '/'){
      const rslt = parseFloat(firstNum) / parseFloat(secondNum);
      setResult(rslt);
    }
  }

  useEffect(() => {
    calcFunc();
  })
  return (
    <div>
        <input placeholder="First number" onChange={(e) => (setFirstNum(e.target.value))}/>
        <select onChange={(e) => {setOperator(e.target.value); }}>
          <option>+</option>
          <option>-</option>
          <option>*</option>
          <option>/</option>
        </select>
        <input placeholder="Second number" onChange={(e) => (setSecondNum(e.target.value))}/>
        <div>
          {result}
        </div>
    </div> 
  )
}

export default Calculator;