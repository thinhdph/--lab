import React from 'react';
import './detail.css';
import { useParams } from 'react-router-dom';
import { Filmlist } from './object/Filmlist';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Detail() {
    const { id } = useParams();

    const film = Filmlist.find((obj) => {
        return obj.id == id;
    });
    //  gan link youtube
    const [video, setVideo] = useState(film.src);

    //tat mo popup
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenPopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container detail">
            <Card sx={{ maxWidth: 1100 }}>
                <CardMedia component="img" alt="green iguana" height="600" image={`../${film.img}`} />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {film.tilte}
                    </Typography>
                    <div className="card-detail">
                        <Typography variant="h5" color="text.secondary">
                            publish year: {film.year}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            nation: {film.nation}
                        </Typography>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                        {film.info}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button
                        size="small"
                        onClick={() => {
                            setVideo(video);
                            setIsOpen(true);
                        }}
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            {isOpen && (
                <div id="popup1" className="overlay">
                    <div className="popup">
                        <iframe
                            width="448"
                            height="315"
                            src={video}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                        <button onClick={handleOpenPopup}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}