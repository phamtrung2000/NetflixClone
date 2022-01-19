import React,{useEffect,useState} from 'react'
import Header from '../Header/Header'
import axios from 'axios'
import "./DetailPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FilmList from './../FilmList/FilmList';
import avater from '../../image/Avatar (1).png'
import Footer from './../Footer/Footer';
import { Link, Route, Router, Switch, useHistory } from 'react-router-dom';
import WatchPage from '../WatchPage/WatchPage';
import Loading from '../Loading/Loading';
import { render } from 'react-dom';
import Toast from '../ToastMessage/Toast';
import ToastDelete from '../ToastMessage/ToastDelete';
function DetailPage() {
    const baseUrl='https://image.tmdb.org/t/p/original';
    const [movieList,setMovieList]=useState([])
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=070460ee0b557df99bd8fd941d183e23')
        .then(function(response){
            setMovieList(response.data.results.slice(0,2)[1]);
        })
        .catch(function(error){
            console.log(error)
        })
    }, [])
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        function Load()
        {
            setLoading(true);
            setTimeout(()=>{
                setLoading(false);
            },500)
        }
        Load()
    },[])
    const [showToast, setToast] = useState(false);
    const [showToastError, setToastE] = useState(false);
    const [check, setCheck] = useState(false);
    let count = 0;
    const HandleClick = e =>{
        e.preventDefault();
        if(showToast== false && count == 0)
        {
            setToast(true)
            count++;
            setToastE(false)
        }
        else
        {
            setToast(false)
            setToastE(true)
        }

        if(check == false)
        {
            setCheck(true);
        }
        else{
            setCheck(false);
        }
    }
    return (
        <>
        { loading? <Loading/>:
        <div className="detail">
            <Header cate="home"></Header>
            <div className="detail__introduce">
            <Toast showToast={showToast} setToast={setToast} />
            <ToastDelete showToast={showToastError} setToast={setToastE} />
                <img src={movieList? baseUrl.concat(movieList.poster_path):''} className="detail__introduce-background" alt="" />
                <div className="detail__introduce-wrapper">
                    <div className="detail__introduce-left">
                        <img src={movieList? baseUrl.concat(movieList.backdrop_path):''} className="detail__introduce-image" alt="" />
                    </div>
                    <div className="detail__introduce-right">
                        <div className="detail__introduce-title">
                            VENOM 2: ĐỐI MẶT TỬ THÙ
                        </div>
                        <div className="detail__introduce-sub">
                            Venom: Let There Be Carnage (2021)
                        </div>
                        <div className="detail__introduce-cate">
                            <span className="cate__item">
                                Hành động
                            </span>
                            <span className="cate__item">
                                Hài hước
                            </span>
                            <span className="cate__item">
                                Viễn tưởng  
                            </span>
                        </div>
                        <div className="detail__introduce-info">
                            Đạo diễn: Andy Serkis
                        </div>
                        <div className="detail__introduce-info">
                            Khởi chiếu: 9/30/2021
                        </div>
                        <div className="detail__introduce-info">
                            Thời lượng: 1 tiếng 36 phút
                        </div>
                        <div className="detail__introduce-info">
                            Quốc gia: Mỹ
                        </div>
                        
                        <div className="detail__introduce-button">
                            <a href="/phim/detail/watch">
                                <span >
                                    <FontAwesomeIcon icon="play"></FontAwesomeIcon>
                                    Xem ngay
                                </span>
                            </a>
                            <span onClick={HandleClick}>
                                { !check?
                                <FontAwesomeIcon icon="plus"></FontAwesomeIcon> : 
                                <i class="fas fa-check"></i>
                                }

                                {
                                    !check? "Phim của tôi" : "Đã thêm"
                                }
                                
                                

                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detail__trailer">
                <span className="title">
                    TRAILER PHIM VENOM 2: ĐỐI MẶT TỬ THÙ
                </span>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/-FmWuCgJmxo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="detail__actress">
                    <div className="title">
                        DIỄN VIÊN
                    </div>
                <div className="container">
                    <ul className="detail__actress-list">
                        <li className="actress__item">
                            <div className="actress__item-image">
                                <img src="data:image/jpeg;base64,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" alt="" />
                            </div>
                            <div className="actress__item-name">
                                Tom Hardy
                            </div>
                            <div className="actress__item-role">
                                Venom
                            </div>
                        </li>
                        <li className="actress__item">
                            <div className="actress__item-image">
                                <img src="data:image/jpeg;base64,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" alt="" />
                            </div>
                            <div className="actress__item-name">
                                Woody Harrelson
                            </div>
                            <div className="actress__item-role">
                                Cletus Kasady
                            </div>
                        </li>
                        <li className="actress__item">
                            <div className="actress__item-image">
                                <img src="data:image/jpeg;base64,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" alt="" />
                            </div>
                            <div className="actress__item-name">
                                Amber Sienna
                            </div>
                            <div className="actress__item-role">
                                Party Guess
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="detail__story">
                <div className="title">
                    NỘI DUNG PHIM
                </div>
                <div className="container">
                </div>
                    <div className="detail__story-info">
                        Venom 2 là câu chuyện về phóng viên Eddie Brock cố gắng làm quen với việc sống như 1 vật chủ của sinh vật ngoài hành tinh Venom, kẻ ban cho anh siêu năng lực nhưng cũng khiến anh phải cảnh giác. Brock cố gắng xây dựng lại sự nghiệp của mình bằng cách phỏng vấn tên sát nhân Cletus Kasady, kẻ trở thành vật chủ của sinh vật Carnage và bỏ trốn khỏi nhà tù sau khi may mắn thoát khỏi hành quyết.
                    </div>
            </div>
            <div className="detail__list">
                <div className="title">
                    PHIM CÙNG THỂ LOẠI
                </div>
                <FilmList></FilmList>
            </div>
            <Footer></Footer>
        </div>
}
        </>
    )
}

export default DetailPage
