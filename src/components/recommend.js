import React from "react";
import "./recommend.css"

export default function Recommend({ film }) {
    return (
        <div className="recommend">
            <h2 className='recommend-tilte'>Phim Đề Cử</h2>
            <div className="recommend-container">
                {
                    film.map((RecommendFilm) => (
                        <div className="recommend-film" key={RecommendFilm.id} >
                            <div className="recommend-card">
                                <img className="recommend-img" src={RecommendFilm.img} />
                                <h4 className="recommend-name">{RecommendFilm.tilte}</h4>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )

}