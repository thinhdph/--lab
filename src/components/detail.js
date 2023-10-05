import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { Filmlist } from "./object/Filmlist";
export default function Detail() {  
        const {id} = useParams();
  const film = Filmlist.find(obj => {
    return obj.id == id;
  });
   let cost = film.cost.toLocaleString();
   console.log(id);
   return(
    <div className='container'>
     <div className='product-card'>
    	<div className='badge'>{film.tilte}</div>
    	<div className='product-tumb'>
    		<img src={`../${film.img}`} alt=''/>
    	</div>
    	<div className='product-details'>
        	<h4>{film.year}</h4>
      		<div className='product-price'>Market value: € {cost}</div>
      		<p>{film.info}</p>
      		<div className='product-bottom-details'></div>
    	</div>
  </div>
</div>
   )
}