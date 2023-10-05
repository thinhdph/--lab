import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Route, Link } from 'react-router-dom'
//  export default function Content() {
//     // const Detail = () => alert('aa')
//         return (

//         <div className='container'>
//         {
//             Filmlist.map((film) => (
//                 <div className='column' key ={film.id} >
//                     <div className='card' >
//                         <img  className='img-content' src={film.img} />
//                         <h3 >{film.tilte}</h3>
//                         <p className='year'> {film.year}</p>
//                         <p className='nation'> {film.nation}</p>
//                         {<p><button onClick={Detail}>Detail</button></p> }
//                     </div>
//                 </div>
//             ))
//         }</div>
//     )
// }
export default function Content({ films }) {
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
                                <Link to={`/detail/${film.id}`}><button>Detail</button></Link>
                            </div>
                        </div>
                    ))
                }</div>
            <Stack spacing={2}>           
                <Pagination count={10} color="primary" className=""/>         
            </Stack>
        </div>

    )
}