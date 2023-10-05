import React from 'react';
import './listtable.css';
import { Link } from 'react-router-dom';
export default function RESTURANT(props) {
  return (
    <div>

    <div style={{  
    margin_left: "300px",
    margin_top: "30px"}}>
  
    
      <a style={{text_decoration: "none"}} href="#"><button  style={{
         margin:"0px 15px",
         width:"150px",
         height:"45px",
         background_color: "#847c85",
         color: "#fff",
         font_size:" 17px",
         font_family:"'Kanit', sans-serif",
         border:" 0.5px gray",
         transition: "0.4s ease-in-outerHeight",
         opacity:" 0.8",
         background_color: "white",
         color: "black",
         border:"1.5px solid gray",
         border_radius: "2.5px",

      }}>Seat Guests</button></a>
      <a href="#"><button>Split Bill &nbsp; <i className="fa-regular fa-split"></i></button></a>
      <a href="#"> <button>Transfer &nbsp; <i className="fa-solid fa-money-bill-transfer"></i> </button></a>
      <Link to="/Nav"><button>Run POS &nbsp; <i className="fa-solid fa-sort"></i></button></Link>
      <a href="#"><button id='print'>Print Prereceipt &nbsp; <i className="fa-solid fa-print"></i></button></a>
      <a href="#"><button>Log OFF &nbsp; <i className="fa-solid fa-right-from-bracket"></i></button></a>
</div>
     <p id='p1' >{props.tc}  <br></br><span id='span1'> {props.code} &nbsp; </span></p>
     
     <p  id=''style={{textAlign:'center', color:'white' , background:'#847c85', width:'100%',height:'25px'}}>EL TUCAN</p>
     
        </div>
  )
}
   