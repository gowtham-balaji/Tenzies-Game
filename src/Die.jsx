import React from "react";


function Die(props){

   const styles = {
      background : props.held  ? "#37db21" : "#fff"
     }
   return (
    <div style = {styles} className="die">
    <h1>{props.value}</h1>
   </div>
   )
}


export default Die;