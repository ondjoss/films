import React from 'react';



const Card = ({film}) => {
    return (
        <div className='card'>
            <img src={film.poster_path 
            ? "https://image.tmdb.org/t/p/w500/" + film.poster_path 
            : "./img/poster.jpg"} alt="Affiche films" />
            <h2>{film.title}</h2> 
            {film.release_date ? <h5>sorti le : {film.release_date}</h5> : ""}
        </div>
    );
};

export default Card;