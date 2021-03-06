import React, {useEffect,useState} from 'react'
import axios from 'axios'
import './Header.css'
// import logo from '../../image/netflixlogo.jpg'
import logo from '../../image/Logo.png'
import avatar from '../../image/avatar.png'
import signout from '../../image/Vector.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useHistory,useLocation } from 'react-router-dom';

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}
function Header() {
    const [searchValue,setSearchValue]=useState(null);
    let query=useQuery();
    let history = useHistory();
    var input = document.getElementById("search");
    // Execute a function when the user releases a key on the keyboard
    if(input)
    {
        input.addEventListener("keyup", function(event) {
            // Number 13 is the "Enter" key on the keyboard
            if (event.code  === 'Enter') {
                console.log('yes');
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                handleSearching();
            }
        });
    }
    const handleMobileSearch=()=>{
        document.querySelector('.header__navigation-search').classList.toggle('active')
    }
    const handleSearch=()=>{
        document.querySelector('.header__search').classList.toggle('active');
    }
    const handleSearching=()=>{
        history.push(`/phim?loai=${searchValue}`);
    }
    const handleNotiDropdown=()=>{
        document.querySelector('.header__noti').classList.toggle('active');
        if(localStorage.getItem("noti")=="yes")
        {
            localStorage.removeItem("noti");
        }
        setNoti(null);
    }
    const handleSignout=()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('noti');
        history.push("/");
        setUser(null);
    }
    const handleTheloai=()=>{
        document.querySelector('.category__wrapper').classList.toggle('active')
    }
    const handleUsser=()=>{
       history.push("/user");
    }
    const [user,setUser]=useState(null);
    const [noti,setNoti]=useState(null);
    const [movieList,setMovieList]=useState([])
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=070460ee0b557df99bd8fd941d183e23')
        .then(function(response){
            setMovieList(response.data.results.slice(0,6));
        })
        .catch(function(error){
            console.log(error)
        })
    }, [])
    useEffect(()=>{
        setUser(localStorage.getItem("token"))
    },[user])
    useEffect(()=>{
        if(localStorage.getItem('noti')=='yes')
        {
            setNoti(localStorage.getItem('noti'))
        }
        else{
            setNoti(null);
        }
    },[localStorage.getItem('noti')])

    return (
        <div className="header">
            <div className="header__container">
                <div className="container">
                    <div className="header__wrapper">
                        <a className="header__logo" href="/home">
                            <img src={logo} alt="" />
                        </a>
                        <ul className="header__navigation">
                            <li className="header__navigation-search">
                                <div onClick={handleMobileSearch}>
                                    <span href="" className="search__button" >Duy???t t??m</span>
                                    <span className="header__avatar-arrow"></span>
                                </div>
                                <ul className="menu__mobile">
                                    <span className="header__avatar-arrow-up"></span>
                                    <li className="menu__mobile-tab"><a href="/home" >Trang ch???</a></li>
                                    <li className="menu__mobile-tab"><a href="/phimle">Phim l???</a></li>
                                    <li className="menu__mobile-tab"><a href="/phimbo">Phim b???</a></li>
                                    <li className="menu__mobile-tab"><a href="/theloai">Th??? lo???i</a></li>
                                    <li className="menu__mobile-tab"><a href="/quocgia">Qu???c gia</a></li>
                                </ul>
                            </li>
                            <li className="header__navigation-tab">
                                <a href="/home" className="tab">Trang ch???</a>
                            </li>
                            <li className="header__navigation-tab">
                                <a href="/phim?loai=Phim l???" className="tab" >Phim l???</a>
                            </li>
                            <li className="header__navigation-tab">
                                <a href="/phim?loai=Phim b???" className="tab" >Phim b???</a>
                            </li>
                            <li className="header__navigation-tab" onMouseOver={handleTheloai} onMouseOut={handleTheloai}>
                                <a className="tab" >Th??? lo???i</a>
                                <div className="category__wrapper">
                                    <ul className="category__list">
                                        <li className="category__list-item">
                                            <a href="/phim?loai=H??nh ?????ng">
                                                H??nh ?????ng
                                            </a>
                                        </li>
                                        <li className="category__list-item">
                                            <a href="/phim?loai=T??nh c???m">
                                                T??nh c???m
                                            </a>
                                        </li>
                                        <li className="category__list-item">
                                            <a href="/phim?loai=H??i h?????c">
                                                H??i h?????c
                                            </a>
                                        </li>
                                        <li className="category__list-item">
                                            <a href="/phim?loai=T??m l??">T??m l??</a>
                                        </li>
                                        <li className="category__list-item">
                                            <a href="/phim?loai=H??nh s???">
                                                H??nh s??? 
                                            </a>
                                        </li>
                                        <li className="category__list-item">
                                            <a href="/phim?loai=Th??? thao">
                                                Th??? thao
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="category__list">
                                        <li className="category__list-item">
                                            <a href="/phim?loai=Phim Ma Kinh D???">
                                                Phim Ma Kinh D???
                                            </a>
                                        </li>
                                        <li className="category__list-item">
                                            <a href="/phim?loai=Phim Khoa H???c">
                                                Phim Khoa H???c
                                            </a>
                                        </li>
                                        <li className="category__list-item">
                                            <a href="/phim?loai=Phim Phi??u L??u">
                                                Phim Phi??u L??u
                                            </a>
                                        </li>
                                        <li className="category__list-item">
                                            <a href="/phim?loai=Phim Vi???n T?????ng">
                                                Phim Vi???n T?????ng
                                            </a>
                                        </li>
                                        <li className="category__list-item">
                                            <a href="/phim?loai=Phim Ho???t H??nh">
                                                Phim Ho???t H??nh
                                            </a>
                                        </li>
                                        <li className="category__list-item">
                                            <a href="/phim?loai=Phim V?? Thu???t">
                                                Phim V?? Thu???t
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="header__navigation-tab">
                                <a className="tab">Qu???c gia</a>
                            </li>
                        </ul>
                        <div className="header__right">
                            <div className='header__search'>
                                <FontAwesomeIcon className="icon" icon="search" onClick={handleSearch}></FontAwesomeIcon>
                                <input id="search" onChange={(e)=>{
                                    setSearchValue(e.target.value)
                                }} type="text" onSubmit={handleSearching} placeholder='T??n phim, di???n vi??n, th??? lo???i,...' />
                                <input type="submit" id="myBtn" />
                            </div>
                            {user?
                            <div className="header__login">
                                <div onClick={handleNotiDropdown} className="header__noti">
                                    <FontAwesomeIcon className="icon" icon="bell"></FontAwesomeIcon>
                                    {noti?
                                        <div className="header__noti-num">
                                        4
                                        </div>:null
                                    }
                                    <ul className="noti__list">
                                        {movieList && movieList.map(movie=>(
                                            <li className="noti__list-item">
                                                <img src={'https://image.tmdb.org/t/p/original'.concat(movie.backdrop_path)} alt="" className="noti__image" />
                                                <div className="noti__detail">
                                                    <div className="noti__detail-title">
                                                        {movie.original_title}
                                                    </div>
                                                    <span className="noti__detail-date">
                                                        {movie.release_date}
                                                    </span>
                                                </div>
                                            </li>
                                        ))}
                                        
                                    </ul>
                                </div>
                                <div className="header__avatar">
                                    <img src={avatar} alt="" />
                                    <span className="header__avatar-arrow"></span>
                                    <div className="account__wrap">
                                        <span className="header__avatar-arrow-up"></span>
                                        <ul className="account__list">
                                            <li onClick={handleUsser} className="account__list-item">
                                                <img src={avatar} className="account__item-image" alt="" />
                                                <span className="account__item-name">Thien</span>
                                            </li>
                                            <li className="account__list-item">
                                            <FontAwesomeIcon icon="list-alt"></FontAwesomeIcon>
                                            <a href="/phim?loai=Phim c???a t??i">
                                            Phim c???a t??i
                                            </a>
                                             </li>
                                            <li className="account__list-item">
                                            <FontAwesomeIcon icon="cog"></FontAwesomeIcon>
                                            C??i ?????t</li>
                                            <li className="account__list-item">
                                            <FontAwesomeIcon icon="question-circle"></FontAwesomeIcon>
                                            Tr??? gi??p & H??? tr???</li>
                                            <li className="account__list-item">
                                            <FontAwesomeIcon icon="comment"></FontAwesomeIcon>
                                            ????ng g??p ?? ki???n</li>
                                            <li onClick={handleSignout} className="account__list-item">
                                            <img className='signout' src={signout} alt="" />
                                            ????ng xu???t</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>:
                            <a href='/login' className='button__login'>
                                ????ng nh???p
                            </a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
