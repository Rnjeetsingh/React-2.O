import React,{ useState } from 'react'
import './Counter.css';

const Counter = () => {

     const [number, setNumber] = useState(0)
     const [number2, setNumber2] = useState(0)

    const stateHandler = () => {
        setTimeout(() => {
            setNumber(number +1)
            setNumber2(number2=>number2 +1)

        },3000)
        
        console.log(number)
    }
  return (
    <div>
     <h1>{number} {number2}</h1>
      <button className='btutton' onClick={stateHandler}>Click Me</button>
    </div>
  )
}

export default Counter
