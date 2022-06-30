import axios from 'axios';
import React, { useEffect } from 'react';



const Form = () => {

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1b53a67abc248fbeb4ccccf2044cb1a3&query=start&language=fr-FR`
        ).then((res) => console.log(res.data.results));
    }, []);

    return (
        <div className="form-component">
            <div className="form-container">
                <form action="">
                    <input type="text" placeholder='Entrez le titre du film' 
                    id='search-input'/>
                    <input type="submit" value="Rechercher"/>
                </form>
                <div className="btn-sort-container">
                    <div className="btn-sort" id='goodToBad'>Top<span>➜</span></div>
                    <div className="btn-sort" id='badToGood'>Flop<span>➜</span></div>
                </div>
            </div>
            <div className="result"></div>
        </div>
    );
};

export default Form;