import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import './css/content.css';
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
                <h1 style={{color: `white`}}>Phim Đang Chiếu</h1>
            </div>
            <div className="container content">
                {films.map((film) => (
                    <Card sx={{ maxWidth: 280 }} key={film.id}>
                        <CardMedia component="img" alt="green iguana" height="140" image={film.img} />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className="card-content__title">
                                {film.tilte}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Year: {film.year}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Cost: {film.cost}$
                            </Typography>
                        </CardContent>
                        <CardActions className="card-content__action">
                            <Link to={`/detail/${film.id}`}>
                                <button>Detail</button>
                            </Link>
                        </CardActions>
                    </Card>
                ))}
            </div>
            <hr className="content-separation" />
            <Stack spacing={2} className="content-pagination " >
                <Pagination count={10}  color="primary" className="" />
            </Stack>
        </div>
    );
}