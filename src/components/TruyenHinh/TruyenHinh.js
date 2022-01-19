import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import FilmList from '../FilmList/FilmList'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Loading from '../Loading/Loading'
import LoadingFilm from '../LoadingFilm/LoadingFilm'
import  './TruyenHinh.css'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Link,
    useLocation,
    useHistory
  } from "react-router-dom";
import { Dropdown,DropdownButton } from "react-bootstrap"
import Pagination from '../Pagination/Pagination'
function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}
function TruyenHinh({cate}) {
    const location=useLocation();
    const baseUrl='https://image.tmdb.org/t/p/original';
    const [movieList,setMovieList]=useState([])
    const [num, setNum] = useState(0);
    const [currentItems,setCurrentItems]=useState(0);
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=070460ee0b557df99bd8fd941d183e23')
        .then(function(response){
            setMovieList(response.data.results.slice(0,6));
            var sum = response.data.results.map(
                (item, index) => setNum(index + 1)
            )
        })
        .catch(function(error){
            console.log(error)
        })
    }, [])
    const history=useHistory();
    const [type,setType]=useState('');
    const [value1,setValue1]=useState(null);
    const [value2,setValue2]=useState(null);
    const [value3,setValue3]=useState(null);
    const [value4,setValue4]=useState(null);
    const [value5,setValue5]=useState(null);
    let query=useQuery();
    const handleDropdown1=(e)=>{

        setValue1(e.target.text);
    }
    const handleDropdown2=(e)=>{
        setValue2(e.target.text);
    }
    const handleDropdown3=(e)=>{
        setValue3(e.target.text);
    }
    const handleDropdown4=(e)=>{
        setValue4(e.target.text);
    }
    const handleDropdown5=(e)=>{
        setValue5(e.target.text);
    }
    const handleSearch=()=>{
        if(value1==null&&value2==null)
        {
            window.location.reload();
            history.push(`/home`);
        }
        else{
            history.push(`/phim?loai=${value1}&quocgia=${value2}`);
            window.location.reload();
        }
        setValue1(null);
        setValue2(null);
        setValue3(null);
        setValue4(null);
        setValue5(null);
        
    }

    const Dropdownfunc=(e)=>{
        console.log(e.target.id);
        if(document.getElementById(e.target.id+'dropdown'))
        {
            document.getElementById(e.target.id+'dropdown').classList.toggle("show");
        }
    } 
      // Close the dropdown menu if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.category__button')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
    console.log(movieList);
    const [loading, setLoading] = useState(false);
    return (
        <>
        { loading? <Loading/>:
        <div className="cate">
            <Header></Header>
            <div className="cate__wrapper">
                <div className="cate__header">
                    <div className="cate__header-left">
                        <h1>{
                            query.get("loai")!='null'?query.get("loai"):''
                        }</h1>
                        <h1>{
                            query.get("loai")!='null'&&query.get("loai")!='Phim của tôi'?'/':''
                            
                        }</h1>
                        <h1>
                            {
                                query.get("quocgia")!='null'?query.get("quocgia"):''
                            }
                        </h1>
                    </div>
                    <div className="cate__header-right">
                        <span onClick={Dropdownfunc} className="category__button " id="button1" >
                           {value1?value1:'Thể loại'}
                            <FontAwesomeIcon className="caretdown" icon="caret-down"></FontAwesomeIcon>
                            <div id="button1dropdown" className="dropdown-content">
                                <a onClick={handleDropdown1}>Phim Hành Động</a>
                                <a onClick={handleDropdown1}>Phim Tình Cảm</a>
                                <a onClick={handleDropdown1}>
                                    Hài hước
                                </a>
                                <a onClick={handleDropdown1}>Tâm lý</a>
                                <a onClick={handleDropdown1}>
                                    Hình sự 
                                </a>
                                <a onClick={handleDropdown1}>
                                    Thể thao
                                </a>
                                <a onClick={handleDropdown1}>
                                    Phim Ma Kinh Dị
                                </a>
                                <a onClick={handleDropdown1}>
                                    Phim Khoa Học
                                </a>
                                <a onClick={handleDropdown1}>
                                    Phim Phiêu Lưu
                                </a>
                                <a onClick={handleDropdown1}>
                                    Phim Viễn Tưởng
                                </a>
                                <a onClick={handleDropdown1}>
                                    Phim Hoạt Hình
                                </a>
                                <a onClick={handleDropdown1}>
                                    Phim Võ Thuật
                                </a>
                            </div>
                        </span>
                        <span onClick={Dropdownfunc} className="category__button " id="button2" >
                        {value2?value2:'Quốc gia'}
                            <FontAwesomeIcon className="caretdown" icon="caret-down"></FontAwesomeIcon>
                            <div id="button2dropdown" className="dropdown-content">
                                <a onClick={handleDropdown2}>Việt Nam</a>
                                <a onClick={handleDropdown2}>Trung Quốc</a>
                                <a onClick={handleDropdown2}>Nhật Bản</a>
                                <a onClick={handleDropdown2}>Thái Lan</a>
                                <a onClick={handleDropdown2}>Hàn Quốc</a>
                                <a onClick={handleDropdown2}>Âu Mỹ</a>
                                <a onClick={handleDropdown2}>Hồng Kông</a>
                                <a onClick={handleDropdown2}>Ấn Độ</a>
                            </div>
                        </span>
                        <span onClick={Dropdownfunc} className="category__button " id="button3" >
                            {value3?value3:'Năm phát hành'}
                            <FontAwesomeIcon className="caretdown" icon="caret-down"></FontAwesomeIcon>
                            <div id="button3dropdown" className="dropdown-content">
                                <a onClick={handleDropdown3}>2021</a>
                                <a onClick={handleDropdown3}>2020</a>
                                <a onClick={handleDropdown3}>2019</a>
                                <a onClick={handleDropdown3}>2018</a>
                                <a onClick={handleDropdown3}>2017</a>
                                <a onClick={handleDropdown3}>2016</a>
                                <a onClick={handleDropdown3}>2015</a>
                                <a onClick={handleDropdown3}>2014</a>
                                <a onClick={handleDropdown3}>2013</a>
                                <a onClick={handleDropdown3}>2012</a>
                            </div>
                        </span>
                        <span onClick={Dropdownfunc} className="category__button " id="button4" >
                            {value4?value4:'Ngôn ngữ'}
                            <FontAwesomeIcon className="caretdown" icon="caret-down"></FontAwesomeIcon>
                            <div id="button4dropdown" className="dropdown-content">
                                <a onClick={handleDropdown4}>Phụ Đề</a>
                                <a onClick={handleDropdown4}>Thuyết Minh</a>
                            </div>
                        </span>
                        <span onClick={Dropdownfunc} className="category__button " id="button5" >
                            {value5?value5:'Sắp xếp'}
                            <FontAwesomeIcon className="caretdown" icon="caret-down"></FontAwesomeIcon>
                            <div id="button5dropdown" className="dropdown-content">
                                <a onClick={handleDropdown5}>Thời gian cập nhật</a>
                                <a onClick={handleDropdown5}>Lượt xem</a>
                                <a onClick={handleDropdown5}>Năm sản xuất</a>
                            </div>
                        </span>
                        <span className='search__button' onClick={handleSearch}>Tìm kiếm</span>
                    </div>
                </div>
                <span    className="home__slider-header">
                        <span>
                            Danh sách phim đã được lọc
                        </span>
                </span>
               
                <br/>
                <div className="cate__slider">
                        {
                        movieList.length==0? <LoadingFilm/>:
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
                </div>

            </div>
            <br/>
            <Pagination num={num} setNum={setNum} setMovieList={setMovieList} setLoading={setLoading}/>
            <Footer></Footer>
        </div>
}
</>
    )
}

export default TruyenHinh
