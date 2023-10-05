import { useState } from 'react';
import './listtable.css'
import { useDispatch, useSelector } from 'react-redux';
import ParticleBack from './ParticleBack';
export default function A(props){
    const Dispatch=useDispatch();
    const list=useSelector(x=>x.table);
    const[nb,setNb]=useState("")
    const [data,setData]=useState({list});
     
    const HandelVerify=()=>{
        
        if(nb>50 ){
            
            return alert("La capacité des tables est inférieur à 5 personnes");
         
           
        }
       
        Dispatch({type:"CHANGE",data:props.code});

        
    }

 
   
   const Handelsub=(e)=>{
        e.preventDefault();
    return (props.trigger)?(
        <div 
        style={{ background_color:" rgba(9, 0, 0, 0.71)",
        height: "100%",
        width:" 100%",
        position:"absolute",
        top: "0px"
    }}
        
        >
     
        <form  style={{
            border:"none",
            margin_left:"400px",
            margin_top: "250px",
            width: "600px",
            height: "340px",
            box_shadow: "0px 3px 3px 1px lightslategray",
            background_color:"#ffffff"}}
         onSubmit={Handelsub}>
        <h1 onClick={()=>props.settrigger(false)} id='remove'>&nbsp; <i className="fa-sharp fa-solid fa-xmark"></i></h1>
        <h2 

        > Reservation de la&nbsp;{props.code}</h2> <br></br>
        <br></br>
        <div style={{
             margin_left: "20px"
        }}>
        <label 
        style={{color:"#847c85",
        font_family:"'Allerta Stencil', sans-serif",
        margin_left:"55px",
        padding_right: "10px",
        font_size: "17px",
        letter_spacing: "1.5px",
        font_weight: "bold"
        }}>
            Nombre personne :</label> &nbsp;
        <input type="number" 
        style={{
        width:"150px",
        height:"35px",
        font_size:"24px",
        padding_left:"50px",
        outline_color:"#847c85",
        color:"rgb(14, 13, 13)"}}
        onChange={(e)=>setNb(e.target.value)} required/> 
        </div>
        <br></br><br></br>
        <div id='buttons'>
            <button type='button' onClick={HandelVerify}  onChange={(e)=>setNb(e.target.value)}>Valider&nbsp; <i className="fa-solid fa-check"></i></button> &nbsp; &nbsp; &nbsp;
            <button>Annuler </button>
        </div>
      </form>
      </div>
    ):null

    
}}