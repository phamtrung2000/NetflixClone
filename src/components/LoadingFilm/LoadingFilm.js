import React from 'react';
import loading from '../../image/loading3.gif'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import logo from '../../image/netflixlogo.png'
import './LoadingFilm.css'
const LoadingFilm = () => {
    return (
        <div className="loading__icon">
            <div>
                <img src={loading}>

            </img>
            </div>
            
        </div>
    );
}

export default LoadingFilm;
