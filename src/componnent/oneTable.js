import React from 'react'
import { useState } from 'react';
import './onetab.css';
 function OneTable(props) {
  const st=props.statu;
  return (
  (st==="Disponible" )?<div id='swip' style={{border:"2px solid black", width:"270px", height:"110px",marginTop:"20px"}} onClick={()=>props.fn(props.id,props.p,props.tc)} onDoubleClick={props.settPop}    >
      <span>{props.statu}</span><br></br>
      <h1 style={{marginTop:"40px",fontFamily:"'Comfortaa', cursive",fontSize:"30px",textAlign:"center"}}>{props.id}</h1>
    </div> :(st==="Reservée")?<div id='swip' style={{border:"1px solid black", width:"270px", height:"110px",background:" rgb(247, 68, 68)",marginTop:"20px"}} onClick={()=>props.funct(props.id,props.p,props.tc)} onDoubleClick={props.settPop}   >
    <span>{props.statu} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; {props.dt1}</span><br></br>
    <h1 style={{marginTop:"-10px",fontFamily:"'Comfortaa', cursive",fontSize:"30px",marginLeft:"70px"}}>{props.id}</h1>
   
  </div>:<div id='swip' style={{border:"1px solid black", width:"270px", height:"110px",background:"#90EE90",marginTop:"20px"}} onClick={()=>props.funct(props.id,props.p,props.tc)} onDoubleClick={props.settPop}   >
  <span>{props.statu} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; {props.dt1}</span><br></br>
  <h1 style={{marginTop:"-10px",fontFamily:"'Comfortaa', cursive",fontSize:"30px",marginLeft:"70px"}}>{props.id}</h1>
 
</div>

  )
  
  
}

export default OneTable
