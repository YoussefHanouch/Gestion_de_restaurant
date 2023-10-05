import {useEffect, useState } from 'react';
import { table } from './data';
import {Swiper,SwiperSlide} from 'swiper/react';
import RESTURANT from './Resturant';
import Footer from './Footer';
import OneTable from './componnent/oneTable';
import 'swiper/swiper.min.css';

export default function Table(props) {
    const [tab,settab]=useState([])
    var arr2=new Array()
    //x=le nombre de slider 

    const x=table.length/ 15;
    useEffect(()=>{
        if(Number.isInteger(x)) {
            var y=1
            for(var i=1;i<=x;i++){
                const arr1=table.slice(y-1,y+14)
                arr2=[...arr2,arr1]
                var y=y+15
            }
        }
        else{
            var y=1
            for(var i=1;i<=x+1;i++){
                const arr1=table.slice(y-1,y+14)
                arr2=[...arr2,arr1]
                var y=y+15
               
            }
                   }
        settab(arr2)
    },null)
    console.log(tab)
    return (      
        <div  >
        <RESTURANT code={props.code} p={props.ph} tc={props.tc}/>
            
        <Swiper spaceBetween={50} className="grid grid-cols-2" >
          {
              tab.map((a,i)=>{return <SwiperSlide className='grid grid-rows-3 gap-2 grid-cols-3 justify-items-center max-[670px]:grid-cols-1 
                              sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-4  xl:grid-cols-5  xl:grid-row-4' 
                              >
                            
                  {a.map((e)=>{return <OneTable  id={e.id} statu={e.statu} fn={props.funct}  dt1={props.dt}/>})} 
              </SwiperSlide>})
          }
        </Swiper>
          <Footer  code={props.code} p={props.ph} tc={props.tc}/>
    </div>
    )
  }