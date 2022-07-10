import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import axios from 'axios';



const UserList = () => {

    const [listData, setListData] = useState([]);

    useEffect(() => {

        let filmsId = window.localStorage.films ? window.localStorage.films.split(",") : [];

        for(let i = 0; i < filmsId.length; i++){
            axios.get(`https://api.themoviedb.org/3/movie/${filmsId[i]}?api_key=1b53a67abc248fbeb4ccccf2044cb1a3&language=fr-FR`)
            .then((res) => setListData((listData) => [...listData, res.data]));
        }

    }, []);

    return (
        <div className='user-list-page'>
            <Header/>
            <h2>Favoris <span>&#128150;</span></h2>
            <div className="result">
                {listData.length > 0 ? (listData.map((film) => <Card film={film} key={film.id}/>)) : (<h2>Aucun favoris pour le moment</h2>)}
            </div>
        </div>
    );
};

export default UserList;