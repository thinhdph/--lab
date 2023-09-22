import React from "react";
function Detail() {
    alert('message');
}
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
                                {<p><button onClick={Detail}>Detail</button></p>}
                            </div>
                        </div>
                    ))
                }</div>
        </div>

    )
}