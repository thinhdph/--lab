import React from "react";

export default function Recommend({ film }) {
    return (
        <div className="recommend">
            <p className="recommend-tilte"> Phim đề cử</p>
            <div className="container">
                {
                    film.map((RecommendFilm) => (
                        <div className="recommend-film" >
                            <div className="recommend-card">
                                <div className="img">
                                    <img src={RecommendFilm.img} />
                                    <h4>{RecommendFilm.tilte}</h4>
                                </div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )

}