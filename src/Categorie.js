import React from 'react';
import {Categories_produits} from './data';
import { useState } from 'react';


export default function Categorie(props) {

  const [categorie,setcategorie]=useState("Pizza");


  const[popup,setPop]=useState(false);
  const handleClickOpen=()=>{
    setPop(!popup);
}
  const [idproduit,setidproduit]=useState("");
  const [variant,setvariant]=useState("");
  const CategoriesProduits=Categories_produits;
  const data=Categories_produits.find((c)=>{return c.categorie==categorie})
  const produit=data.produits.find((p)=>{return p.id==idproduit})
  const [search,setSearch]=useState("");
  const[newqte,setQte]=useState("")
  const[prix,setPrixU]=useState("")
  const [id,setid]=useState("")

const HandelSubmit=(e)=>{
  e.preventDefault();
}
  
  return(
   <div>
   <div style={{display:"flex",justifyContent:"space-between"}}  >
    
   <h1 style={{marginLeft:"10px",fontSize:"30px",marginTop:"27px",fontFamily:"  'Cormorant SC', serif"}}>LS ONE<i class="fa-solid fa-pizza-slice"></i></h1>

   <div style={{marginTop:"20px"}} >
       <button style={{border:"1px solid black",width:"220px",height:"35px",color: "#f75b60",fontSize:"17px",fontWeight:"bold",margin:"0px 19px",}}>ONLINE ORDERS</button>
       <select style={{border:"1px solid black",width:"220px",height:"35px",margin:"0px 19px"}}>
         <option style={{fontSize:"19px"}}>Garçon</option>
       </select>
       <input placeholder="Nombre d'invités" style={{border:"1px solid black",width:"220px",height:"35px",paddingLeft:"10px",margin:"0px 19px",fontSize:"20px",borderRadius:"7px",outlineColor:"blue"}} type={"number"} /><i style={{position:"absolute",marginLeft:"-50px",marginTop:"10px"}} class="fa-solid fa-user"></i>
       <input onChange={(e)=>setSearch(e.target.value)}  placeholder="Serach ..." style={{border:"0.5px solid black",width:"400px",height:"35px",paddingLeft:"10px",margin:"0px 19px",fontSize:"22px",outlineColor:"blue",fontFamily:"'Julius Sans One', sans-serif",position:"relative",borderRadius:"10px"}} type={"search"}  /><i style={{position:"absolute",marginLeft:"-40px",marginTop:"10px"}} class="fa-solid fa-magnifying-glass"></i>


   </div>
   
   </div>




<div style={{display:"flex" ,flexDirection:"row"}}>

  <div  style={{marginTop:"250px",marginLeft:"30px"}} >
  
    {CategoriesProduits.map((e,i)=>{return(
    <div className='border-2 border-solid border-yellow-400'   onClick={()=>{setcategorie(e.categorie) }}  key={i} style={{background:"#847c85",color:"white",width:"180px",margin:"15px 0px",height:"50px",paddingLeft:"10px",paddingTop:"10px",fontSize:"25px",fontFamily:"'Allerta Stencil', sans-serif",fontWeight:"bold"}}>{e.categorie}</div>
)})}
  </div>
  <div className='row' style={{marginTop:"100px"}}>
    <div className="grid grid-cols-3 max-[1270px]:grid-cols-2 gap-5 mx-5 mt-6 " onClick={()=>handleClickOpen()}>
    {data.produits.filter((e)=>e.nom.toUpperCase().includes(search.toUpperCase())).map((p,i)=>{return <div key={i} className=" bg-white text-center font-semibold cursor-pointer rounded-xl border-2 border-solid border-yellow-400 relative">
            <div className='overflow-hidden py-5' onClick={()=>{setidproduit(p.id)}} key={p.id}>
                <img src={p.img} className='w-60 mx-auto transition duration-1000 hover:scale-110 hover:rotate-12 :' style={{borderRadius:"10px",width:"200px",height:"300px"}}/></div>
            <p className='pb-20 text-2xl uppercase max-[1470px]:text-xl' style={{fontSize:"17px",fontFamily:"'Marcellus SC', serif"}} >{p.nom}</p>
            <p className='mt-10  text-2xl  absolute bottom-10 left-1/3' style={{color:"red",textAlign:"center",fontFamily:"'Allerta Stencil', sans-serif",fontSize:"18px"}} >Stock: {p.stock}</p>
          </div>})}
          
    </div>
  </div>
  {popup?(

    <div id='m' style={{width:"800px",marginLeft:"400px",display:"flex",height:"1000px",marginTop:"90px",borderRadius:"30px"}}>
    <h2 onClick={()=>handleClickOpen(false)} style={{fontSize:"40px",color:"red",marginLeft:"750px",marginTop:"10px"}}><i class="fa-solid fa-x"></i></h2>
    <table border="1" style={{color:"white",background:"#847c85",marginLeft:"-700px",marginTop:"100px",border:"1px solid black",width:"250px",height:"100px"}}>
    <tr style={{border:"1px solid black"}} >
      <td style={{height:"50px",paddingLeft:"80px",fontSize:"27px",color:"white"}}  >Variantes</td>
    </tr>
    <tr style={{border:"1px solid black"}}>
      <td style={{border:"1px solid black",height:"30px",paddingLeft:"20px",fontSize:"25px",fontFamily:"'Allerta Stencil', sans-serif"}}>Nom</td>
      <td style={{height:"30px",paddingLeft:"10px",fontSize:"25px",fontFamily:"'Allerta Stencil', sans-serif"}}  >Prix</td>
    </tr>

    {produit.variant.map((e,i)=>{
      return(
        
        <tr key={i} style={{border:"1px solid black",fontSize:"20px"}}>
        <input  type={"radio"} value={e.type} name="variant" style={{marginLeft:"10px"}}/>{e.type}
          <td style={{border:"1px solid black",height:"50px",paddingLeft:"10px",fontSize:"20px"}}>{e.prix}</td>
        </tr>
      )
    })}
   </table>

   <table border="1" style={{color:"white",background:"#847c85",marginLeft:"-300px",marginTop:"400px",border:"1px solid black",width:"10px",height:"100px"}}>
   <tr style={{border:"1px solid black"}} >
     <td style={{height:"50px",paddingLeft:"80px",fontSize:"27px",color:"white",marginLeft:"90px"}}  >Addons</td>
   </tr>
   <tr style={{border:"1px solid black"}}>
     <td style={{border:"1px solid black",height:"30px",paddingLeft:"20px",fontSize:"25px",fontFamily:"'Allerta Stencil', sans-serif"}}>Nom</td>
     <td style={{border:"1px solid black",height:"30px",paddingLeft:"10px",fontSize:"25px",fontFamily:"'Allerta Stencil', sans-serif"}}  >Qte</td>
     <td style={{height:"30px",paddingLeft:"10px",fontSize:"25px",fontFamily:"'Allerta Stencil', sans-serif"}}  >Prix Unitaire</td>
   </tr>

   {produit.Addons.map((e,i)=>{
     return(
       <tr key={i} style={{border:"1px solid black",fontSize:"20px"}} onSubmit={HandelSubmit}>
       <input  type={"checkbox"} value={e.Nom} name="addon" style={{marginLeft:"10px"}}/>{e.Nom}
         <td style={{border:"1px solid black",paddingLeft:"10px",fontSize:"20px",color:"white"}}><input defaultValue={1} min="1" max="100" style={{background:"#847c85",width:"120px",marginLeft:"-9.5px",outline:"none",paddingLeft:"50px"}} type={"number"} onChange={(x)=>{setQte(x.target.value);setid(e.Nom);setPrixU(e.prixU*newqte)}}/></td>
         {id===e.Nom  ?<td style={{border:"1px solid black",paddingLeft:"10px",fontSize:"20px"}}  >{prix}&nbsp;DH</td>
        :<td style={{border:"1px solid black",paddingLeft:"10px",fontSize:"20px"}} onChange={(e)=>setPrixU(e.target.value)} >{e.prixU}DH</td>}
         
         
       </tr>
     )
   })}
  </table>


    <button style={{width:"300px",border:"1px solid lightgray",marginLeft:"-360px",height:"40px",marginTop:"700px",background:"#6495ED",color:"white",fontSize:"19px"}} >Envoyer</button>

  </div>
):null}

    </div>
    </div>
)};