
import React from "react";


function Die(props) {

   const styles = {
      background: props.held ? "#37db21" : "#fff"
   }
   return (
      <div style={styles} onClick={props.holdDice} className="die">
         <h1>{props.value}</h1>
      </div>
   )
}


export default Die;