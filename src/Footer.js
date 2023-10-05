import React from 'react'
import './Footer.css';
function Footer(props) {
    var d = new Date();
    var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  return (
    <div>
      <hr  className='border-black border-solid	  border-2	'></hr>
        <div className='justify-between mx-7 flex'>
            <h3 className='ml-0.5	font-bold  text-4xl	 font-cursive'>Ls <span  style={{color:"#847c85"}}> One</span></h3>
            <h5 className="text-4xl font-bold">{props.code}</h5>
            <h3 className='mx-24 text-4xl'> Time:&nbsp; <span className='font-bold  text-3xl'> {hours} </span></h3>
        </div>
    </div>
  )
}

export default Footer
