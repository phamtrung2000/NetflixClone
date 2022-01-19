import React from 'react';
import loading from '../../image/loading.gif'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import logo from '../../image/netflixlogo.png'
import './Loading.css'
const Loading = () => {
    return (
        <div className="Loading__page">
            <div>
                <img className='img1' src={logo}></img>
            </div>
            <div>
                <img src={loading}>

            </img>
            </div>
            
        </div>
    );
}

export default Loading;
