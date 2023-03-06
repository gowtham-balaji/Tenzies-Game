import { useEffect, useState } from "react"
import Die from "./Die"
import "./styles.css"
import { nanoid } from 'nanoid'
import Confetti from "react-confetti"


export default function App() {


  const [dice, setDice] = useState(newArray())
  const [tenzies, setTenzies] = useState(false)


  useEffect(() => {
    const held = dice.every(die => die.held)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (held && allSameValue) {
      setTenzies(true)
      console.log("you won")
    }
  }, [dice])

  function newArray() {
    const newArr = []
    for (let i = 0; i < 10; i++) {
      newArr.push(generateroll())
    }
    return newArr
  }

  function generateroll() {
    return {
      value: Math.ceil(Math.random() * 6),
      held: false,
      id: nanoid()
    }
  }
  function rollDice() {
    if (!tenzies) {
      setDice(prevDice => prevDice.map(die => {
        return die.held ? die :

          generateroll()
      }))
    }
    else {
      setDice(newArray())
      setTenzies(false)
    }
  }

  function holdDice(id) {
    setDice(prevDice => prevDice.map(die => {
      if (die.id === id) {
        return { ...die, held: !die.held }
      }
      else {
        return die
      }
    }))
  }

  const diceElements = dice.map(die => {
    return <Die value={die.value} key={die.id} held={die.held} holdDice={() => { holdDice(die.id) }} />
  })


  return (
    <>
      <div className="confetti">{tenzies && <Confetti />}</div>
      <h1 className="header">Tenzies Game</h1>

      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <main>
        <div className="container">
          {diceElements}
        </div>
        <button className="btn" onClick={rollDice}>
          {tenzies ? "New Game" : "Roll"}
        </button>
      </main>
    </>

  )
}