import React from 'react';



const Form = () => {
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