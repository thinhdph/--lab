import React from "react";
import { useState } from "react";
import './content.css'
function Detail() {
    alert('message');
}
export default function Content({ films }) {
    const [film,setFilm]=useState([])
    // const Detail = () => alert('aa')
    return (
        <div className="content">
            <div className="content-tilte">
                <h1>Phim Đang Chiếu</h1>
            </div>
            <div className='container'>
                {
                    films.map((film) => (

                        <div className='column' key={film.id} >
                            <div className='card' >
                                <img className='img-content' src={film.img} />
                                <h3 >{film.tilte}</h3>
                                <p className='year'> {film.year}</p>
                                <p className='nation'> {film.nation}</p>
                                {<p><a href='#popup' id='showPopUp'><button onClick={()=>{setFilm(film)}}>Detail</button></a></p>}
                            </div>
                        </div>
                        
                    ))
                }</div>
                <div id="popup" className="overlay">
                    <div className="popup">
                        <img className="popup-img" src={film.img}/>
                        <h2>{film.tilte}</h2>
                        <a className="close" href="#">X</a>
                        <div className="info">
                            {film.info}
                        </div>
                    </div>
                </div>
        </div>

    )
}