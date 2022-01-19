import React, { useEffect, useState } from 'react'
import  './Intro.css'
import logo from '../../image/netflixlogo.png'
import intro1 from '../../image/intro1.png'
import intro2 from '../../image/intro2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './../Footer/Footer';
import { Link, useHistory } from 'react-router-dom';
function Intro() {
    const [token, setToken] = useState(false);
    const chooseLanguage=()=>{
        document.querySelector('.intro__language-choice').classList.toggle('flex');
    }
    /*document.addEventListener('mouseup', function(e) {
        let container = document.querySelector('.intro__language');
        if (!container.contains(e.target)) {
            document.querySelector('.intro__language-choice').classList.remove('flex');
        }
      });*/
    useEffect(()=>{
        function getToken(){
            if(localStorage.getItem("token")!= null)
            {
               setToken(true);
            }
        }
        getToken();
    },[])
    useEffect(()=>{
        localStorage.setItem("noti","yes");
    },[])
    return (
        <div className="intro">
            <div className="intro__begin">
                <img className="intro__background" src="https://assets.nflxext.com/ffe/siteui/vlv3/a1a5d7dc-aedf-4570-b58d-693af16e1445/f203629f-76ad-4418-9fc3-166ce5662a90/VN-vi-20211020-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
                <div className="intro__navbar">
                    <div className="intro__navbar-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="intro__navbar-right">
                        {
                            token? <Link to="/home" className="intro__login">Đăng nhập</Link>:
                        <Link to="/login" className="intro__login">Đăng nhập</Link>
                        }
                    </div>
                </div>
                <div className="intro__middle">
                    <div className="intro__title">
                        Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác
                    </div>
                    <div className="intro__detail">
                        Xem ở mọi nơi . Huỷ bất kỳ lúc nào.
                    </div>
                    <div className="intro__detail">
                        Bạn đã sẵn sàng xem chưa?
                    </div>
                    <a href="/home" className="start__button">
                        Bắt đầu
                        <FontAwesomeIcon icon="chevron-right"></FontAwesomeIcon>
                    </a>
                </div>
            </div>
            <div className="intro__info intro__info1">
                <div className="intro__info-left">
                    <div className="intro__info-wrap">
                        <div className="intro__info-title">
                            Xem ở mọi nơi.
                        </div>
                        <div className="intro__info-detail">
                            Phát trực tiếp không giới hạn phim và chương trình truyền hình trên điện thoại, máy tính bảng, máy tính xách tay và TV.
                        </div>
                    </div>
                </div>
                <div className="intro__info-right">
                    <img src={intro1} alt="" />
                </div>
            </div>
            <div className="intro__info intro__info2">
                <div className="intro__info-left">
                    <img src={intro2} alt="" />
                </div>
                <div className="intro__info-right">
                    <div className="intro__info-wrap">
                        <div className="intro__info-title">
                            Tạo hồ sơ cho trẻ em.
                        </div>
                        <div className="intro__info-detail">
                            Đưa các em vào những cuộc phiêu lưu với nhân vật được yêu thích trong một không gian riêng. Tính năng này đi kèm miễn phí với tư cách thành viên của bạn.
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Intro
