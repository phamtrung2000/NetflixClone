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
                                    <span href="" className="search__button" >Duyệt tìm</span>
                                    <span className="header__avatar-arrow"></span>
                                </div>
                                <ul className="menu__mobile">
                                    <span className="header__avatar-arrow-up"></span>
                                    <li className="menu__mobile-tab"><a href="/home" >Trang chủ</a></li>
                                    <li className="menu__mobile-tab"><a href="/phimle">Phim lẻ</a></li>
                                    <li className="menu__mobile-tab"><a href="/phimbo">Phim bộ</a></li>
                                    <li className="menu__mobile-tab"><a href="/theloai">Thể loại</a></li>
                                    <li className="menu__mobile-tab"><a href="/quocgia">Quốc gia</a></li>
                                </ul>
                            </li>
                            <li className="header__navigation-tab">
                                <a href="/home" className="tab">Trang chủ</a>
                            </li>
                            <li className="header__navigation-tab">
                                <a href="/phim?loai=Phim lẻ" className="tab" >Phim lẻ</a>
                            </li>
                            <li className="header__navigation-tab">
                                <a href="/phim?loai=Phim bộ" className="tab" >Phim bộ</a>
                            </li>
                            <li className="header__navigation-tab" onMouseOver={handleTheloai} onMouseOut={handleTheloai}>
                                <a className="tab" >Thể loại</a>
                                <div className="category__wrapper">
                                    <ul className="category__list">
                                        <li className="category__list-item">
                                            <a href="/phim?loai=Hành động">
                                                Hành động
                                            </a>
                                        </li>
                                        <li className="category__list-item">
                                            <a href="/phim?loai=Tình cảm">
                                                Tình cảm
                                            </a>
                                        </li>
                                        <li className="category__list-item">
                                            <a href="/phim?loai=Hài hước">
                                                Hài hước
                                            </a>
                                        </li>
                                        <li className="category__list-item">
                                            <a href="/phim?loai=Tâm lý">Tâm lý</a>
                                        </li>
                                        <li className="category__list-item">
                                            <a href="/phim?loai=Hình sự">
                                                Hình sự 
                                            </a>
                                        </li>
                                        <li className="category__list-item">
                                            <a href="/phim?loai=Thể thao">
                                                Thể thao
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="category__list">
                                        <li className="category__list-item">
                                            <a href="/phim?loai=Phim Ma Kinh Dị">
                                                Phim Ma Kinh Dị
                                            </a>
                                        </li>
                                        <li className="category__list-item">
                                            <a href="/phim?loai=Phim Khoa Học">
                                                Phim Khoa Học
                                            </a>
                                        </li>
                                        <li className="category__list-item">
                                            <a href="/phim?loai=Phim Phiêu Lưu">
                                                Phim Phiêu Lưu
                                            </a>
                                        </li>
                                        <li className="category__list-item">
                                            <a href="/phim?loai=Phim Viễn Tưởng">
                                                Phim Viễn Tưởng
                                            </a>
                                        </li>
                                        <li className="category__list-item">
                                            <a href="/phim?loai=Phim Hoạt Hình">
                                                Phim Hoạt Hình
                                            </a>
                                        </li>
                                        <li className="category__list-item">
                                            <a href="/phim?loai=Phim Võ Thuật">
                                                Phim Võ Thuật
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="header__navigation-tab">
                                <a className="tab">Quốc gia</a>
                            </li>
                        </ul>
                        <div className="header__right">
                            <div className='header__search'>
                                <FontAwesomeIcon className="icon" icon="search" onClick={handleSearch}></FontAwesomeIcon>
                                <input id="search" onChange={(e)=>{
                                    setSearchValue(e.target.value)
                                }} type="text" onSubmit={handleSearching} placeholder='Tên phim, diễn viên, thể loại,...' />
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
                                            <a href="/phim?loai=Phim của tôi">
                                            Phim của tôi
                                            </a>
                                             </li>
                                            <li className="account__list-item">
                                            <FontAwesomeIcon icon="cog"></FontAwesomeIcon>
                                            Cài đặt</li>
                                            <li className="account__list-item">
                                            <FontAwesomeIcon icon="question-circle"></FontAwesomeIcon>
                                            Trợ giúp & Hỗ trợ</li>
                                            <li className="account__list-item">
                                            <FontAwesomeIcon icon="comment"></FontAwesomeIcon>
                                            Đóng góp ý kiến</li>
                                            <li onClick={handleSignout} className="account__list-item">
                                            <img className='signout' src={signout} alt="" />
                                            Đăng xuất</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>:
                            <a href='/login' className='button__login'>
                                Đăng nhập
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
