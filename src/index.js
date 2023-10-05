import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Table from './table';
import Forget from './Forget';
import Login from './Login';
import Categorie from './Categorie';
import Change from './Change';
import NavScrollExample from './Nav';
import './index.css' ;
import { BrowserRouter, Route,Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

  var d = new Date();
  var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
function App(){
  const [code,setcode]=useState();
  const [ph,setPh]=useState();
  const[tc,setTc]=useState()
  const [date,setDate]=useState();

const  CLICK=(nb)=>{
 
setcode(nb);
setPh("Click deux fois sur la table pour la reserver")
setTc("La table choisie :")

  }
  return (
    <div>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/forget" element={<Forget/>}/>
      <Route path="/change" element={<Change/>}/>
      <Route path="/index" element={<Login/>}/>
      <Route path="/table" element={<Table dt={hours} funct={CLICK} code={code}  p={ph} tc={tc}/>}/>
      <Route path='/Nav' element={<Categorie/>}></Route>
    </Routes>

    </div>
  )
}
 root.render(
  <BrowserRouter>
  <App/>
  
  </BrowserRouter>
 )


