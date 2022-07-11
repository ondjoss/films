import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

//Je continuerai une prochaine fois...

const Form = () => {

    const [filmData, setFilmData] = useState([]);
    const [search, setSearch] = useState("code");
    const [sortGoodBad, setSortGoodBad] = useState(null);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1b53a67abc248fbeb4ccccf2044cb1a3&query=${search}&language=fr-FR`
        ).then((res) => setFilmData(res.data.results));
    }, [search]);

    return (
        <div className="form-component">
            <div className="form-container">
                <form action="">
                    <input type="text" placeholder='Entrez le titre du film' 
                    id='search-input' onChange={(e) => setSearch(e.target.value)} />
                    <input type="submit" value="Rechercher"/>
                </form>
                <div className="btn-sort-container">
                    <div className="btn-sort" id='goodToBad' onClick={() => setSortGoodBad("goodToBad")}>Top<span>➜</span></div>
                    <div className="btn-sort" id='badToGood'onClick={() => setSortGoodBad("badToGood")}>Flop<span>➜</span></div>
                </div>
            </div>
            <div className="result">
                {filmData
                .slice(0, 12)
                .sort((a, b) => {
                    if(sortGoodBad === "goodToBad"){
                        return b.vote_average - a.vote_average; 
                    }else if(sortGoodBad === "badToGood"){
                        return a.vote_average - b.vote_average;
                    }
                })
                .map((film) => 
                <Card key={film.id} film={film} />)}
            </div>
        </div>
    );
};

export default Form;