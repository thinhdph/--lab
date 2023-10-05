import React from "react";
import './detail.css'
import { Link, useParams } from 'react-router-dom'
import { Filmlist } from "./object/Filmlist";
import { useState } from "react";
export default function Detail() {
  const { id } = useParams();
  
  const film = Filmlist.find(obj => {
    return obj.id == id;
  });
  let cost = film.cost.toLocaleString();
  const [video, setVideo] = useState(film.src)
  return (
    <div className='container'>
      <div className='product-card'>
        <div className='badge'>{film.tilte}</div>
        <div className='product-tumb'>
          <img src={`../${film.img}`} alt='' />
        </div>
        <div className='product-details'>
          <h4>{film.year}</h4>
          <div className='product-price'>Market value: € {cost}</div>
          <p>{film.info}</p>
          {<p><a href='#popup' id='showPopUp'><button onClick={()=>{setVideo(video)}}>Detail</button></a></p>}
          <div className='product-bottom-details'></div>
        </div>
      </div>
      <div id='popup1' className="overlay">
        <div className='popup'>
        <iframe width="560" height="315" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <Link to={`/detail/${film.id}`}><button>X</button></Link>
        </div>
      </div>
    </div>
   )
}