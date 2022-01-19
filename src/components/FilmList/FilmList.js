import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Slider from "react-slick";
import './FilmList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function FilmList() {
    const baseUrl='https://image.tmdb.org/t/p/original';
    const [movieList,setMovieList]=useState([])
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=070460ee0b557df99bd8fd941d183e23')
        .then(function(response){
            setMovieList(response.data.results);
        })
        .catch(function(error){
            console.log(error)
        })
    }, [])
    const handleMuteItem=()=>{
        document.querySelector('.home__item-img .mute__icon').classList.toggle('mute')
    }
    const settings = {
        // className: "center",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,      
        lazyLoad:true,
        // centerPadding: "60px",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                infinite: false,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
      };
    return (
        <div className="filmlist">
            <Slider {...settings}>
                    {
                        movieList&&movieList.map(movie=>(
                        <a className="home__slider-item" href="/phim/detail">
                            <img className="home__slider-item-img" src={movie? baseUrl.concat(movie.poster_path):''} alt="" />
                            <div className="home__slider-detail">
                                <div className="detail__item-info">
                                    <div className="detail__item-infoleft">
                                        {movie.original_title}
                                    </div>
                                    <div className="detail__item-inforight">
                                        <span>2h30m</span>
                                        <span>HD</span>
                                    </div>
                                </div>
                                <div className="detail__item-categories">
                                    <span>Bạo lực - </span>
                                    <span>Thời kì lịch sử - </span>
                                    <span>Chính kịch</span>
                                </div>
                            </div>
                        
                        </a>
                        ))
                    }
                    
                    
                </Slider>
        </div>
    )
}

export default FilmList
