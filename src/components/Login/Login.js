import React, { useEffect, useState } from 'react';
import './Login.css'
import logo from '../../image/netflixlogo.png'
import exit from '../../image/exit.png'
import wrapper from '../../image/wrapper.jpg'
import Footer from '../Footer/Footer';
import { Link, useHistory } from 'react-router-dom';
import Home from '../Home/Home';
import { render } from '@testing-library/react';
import User from '../DetailUser/User';
import Confirm from './Confirm';
import ConfirmError from './ConfirmError';
import Loading from '../Loading/Loading';

function Login(){
    let history = useHistory();
   
    const [showModal, setShow] = useState(false);
    const [showModalError, setShowE] = useState(false);
    const [success, setSuccess]= useState(false);
    function Close(){
        history.push("/");
    }
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
    useEffect(()=>{
        if(showModalError == true || showModal == true)
        {
            var x = document.getElementsByClassName("Login__modal");

            for(var i=0; i < x.length ;i++)
            {
                x[i].style.filter = "brightness(30%)"
            }
        }
        else
        {
            var x = document.getElementsByClassName("Login__modal");

            for(var i=0; i < x.length ;i++)
            {
                x[i].style.filter = "brightness(100%)"
            }
        }
    })
    const LoginHandler = e =>{
        e.preventDefault();
        let username = document.getElementById("text").value;
        let password = document.getElementById("password").value;
        if(username === "tinpham1510" && password === "12345678")
        {
            
            setSuccess(true);  
           
            localStorage.setItem("token" ,"12345678");
        }

        if(localStorage.getItem("token")!=null)
        {
            setShow(true);
        }
        else
        {
            setShowE(true);
        }
        console.log(success);
    }
    return (
        <>
        {
         loading? <Loading/> :
        <div className="Login">
            <div className="Login__container">
                <div className="Login__container-wrapper">
                </div> 
                <a className="Login__logo">
                    <img src={logo} alt=" " />
                </a>
                <div className="Login__modal">
                    <button className="Login__modal-exit" onClick={Close}>
                        <img src={exit}></img>
                    </button>
                    <form>
                        <img src={logo}alt="" style={{width: "45%", height: "45%" }}/>
                        <div className="Login__modal-title">
                                Xin chào,
                        </div>
                        <div className="Login__modal-content">
                                Đăng nhập hoặc tạo tài khoản mới
                        </div>
                        <div className="Login__modal-panel">
                            <br/>
                            <a>
                                <input  type="email" placeholder="Email hoặc số điện thoại" id="text"></input>
                            </a>
                            <a>
                                <input  type="password" placeholder="Mật khẩu" id="password" ></input>
                            </a>
                        </div>
                        <div className="Login__modal-panel">
                            <br/>
                            <button onClick={LoginHandler}> Đăng nhập</button>
                        </div>
                    </form>
                    <div className="Login__modal-tocheck">
                        <a className="Login__tocheck-Bx">
                                <input type="checkbox" id='check-box-1' className='
                                apprearance-none h-32 w-32 border-2 rounded-3xl'></input>
                            
                            <span>
                                Lưu mật khẩu
                            </span>
                        </a>
                        <a className="Login__tocheck-Bx" href="#" style={{color:"#8C8C8C"}}>
                            <span>
                                Quên mật khẩu?
                            </span>
                       </a>
                    </div>
                    <br/>
                    <div className="Login__modal-divide">
                        <div className="Login__modal-divide-bar"></div>
                        <div className="Login__modal-divide-content" style={{fontSize: "10px", color:"gray"}}>Hoặc</div>
                        <div className="Login__modal-divide-bar"></div>
                    </div>
                    <div className="Login__modal-account">
                        <button className="Login__modal-account-btn">
                            <box-icon name='facebook-square' type='logo' animation='tada' color='#f4ecec' ></box-icon>
                            <div className="Login__modal-account-text">
                                Facebook
                            </div>
                        </button>
                        <button className="Login__modal-account-btn">
                            <box-icon name='google' type='logo' animation='tada' color='#f4ecec' ></box-icon>
                            <div className="Login__modal-account-text">
                                Google
                            </div>
                        </button>
                    </div>
                    <br/>
                    <p style={{color: "#8C8C8C", fontSize:"12px", marginTop: "-1%"}}>Bạn chưa có tài khoản? <a href="/signup">
                            Đăng kí
                    </a> tại đây</p>

                </div>
                <Confirm showModal={showModal} setShow={setShow}/>
                <ConfirmError showModal={showModalError} setShow={setShowE}/>
            </div>
            
            <br/>
            <Footer/>
        </div>
}
        </>
    );
}

export default Login;
