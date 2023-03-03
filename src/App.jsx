 import { useState } from "react"
 import Die from "./Die"
 import "./styles.css"

 export default function App(){

  
  const [dice ,setDice] = useState(newArray())

  function newArray(){
    const newArr = []
    for(let i=0;i<10;i++){
      newArr.push(
        {value : Math.ceil(Math.random() * 6),
          held:true
      })
    }
    return newArr
  }

  function rollDice(){
    setDice(newArray())
  }

  const diceElements = dice.map(die => {
    return <Die value = {die.value} held ={die.held}/>
  })


  return(
   <main>
     <div className="container">
        {diceElements}
      </div>
      <button className="btn" onClick={rollDice}>Roll</button>
   </main>
  )
 }