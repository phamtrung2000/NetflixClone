import React, { useEffect, useState } from 'react';
import './Signup.css'
import logo from '../../image/netflixlogo.png'
import exit from '../../image/exit.png'
import wrapper from '../../image/wrapper.jpg'
import Footer from '../Footer/Footer';
import { Link, useHistory } from 'react-router-dom';
import Confirm from './Confirm';
import ConfirmError from './ConfirmError';
function Signup(){
    let history = useHistory(); 
    const [success, setSuccess]= useState(false);
    const [showModal, setShow] = useState(false);
    const [showModalError, setShowE] = useState(false);
    function Close(){
        history.push("/");
    }
    useEffect(()=>{
        if(showModalError == true || showModal == true)
        {
            var x = document.getElementsByClassName("Signup__modal");

            for(var i=0; i < x.length ;i++)
            {
                x[i].style.filter = "brightness(30%)"
            }
        }
        else
        {
            var x = document.getElementsByClassName("Signup__modal");

            for(var i=0; i < x.length ;i++)
            {
                x[i].style.filter = "brightness(100%)"
            }
        }
    })
    const LoginHandler = e =>{
        e.preventDefault();
        let username = document.getElementById("mail").value;
        let password = document.getElementById("password").value;
        let repass = document.getElementById("repass").value;
        
        if(username === "tinpham1510@gmail.com" && password === "123456" && repass === "123456")
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
        <div className="Signup">
            <div className="Signup__container">
                <div className="Signup__container-wrapper">
                </div> 
                <a className="Signup__logo">
                    <img src={logo} alt=" " />
                </a>
                <div className="Signup__modal">
                    <button className="Signup__modal-exit" onClick={Close}>
                        <img src={exit}></img>
                    </button>
                    <form>
                        <img src={logo}alt="" style={{width: "45%", height: "45%" }}/>
                        <div className="Signup__modal-title">
                                Chào mừng bạn!
                        </div>
                        <div className="Signup__modal-content">
                                Tham gia Netflix thật đơn giản.
                        </div>
                        <div className="Signup__modal-panel">
                            <br/>
                            <a>
                                <input type="email" placeholder="Email hoặc số điện thoại" id='mail'></input>
                            </a>
                            <a>
                                <input  type="password" placeholder="Mật khẩu" id='password' ></input>
                            </a>
                            <a>
                                <input  type="password" placeholder="Nhập lại mật khẩu" id='repass'></input>
                            </a>
                        </div>
                        <div className="Signup__modal-panel">
                            <br/>
                            <button onClick={LoginHandler}>Đăng ký</button>
                        </div>
                        <div className="Signup__modal-tocheck">
                            <a className="Signup__tocheck-Bx">
                                <input type="checkbox" style={{border: "1px solid red"}}></input>
                                <span>
                                    Tôi đồng ý với các điều khoản, điều kiện {"&"} chính sách của Netflix.
                                </span>
                            </a>
                        </div>
                        <br/>
                        <div className="Signup__modal-divide">
                            <div className="Signup__modal-divide-bar"></div>
                            <div className="Signup__modal-divide-content" style={{fontSize: "10px", color:"gray"}}>Hoặc</div>
                            <div className="Signup__modal-divide-bar"></div>
                        </div>
                        <br/>
                        <p style={{color: "whitesmoke", fontSize:"12px", marginTop: "-1%"}}>Bạn đã có tài khoản? <a href="/login">
                                Đăng nhập
                        </a> tại đây</p>
                    </form>
                </div>
            </div>
            <Confirm showModal={showModal} setShow={setShow}/>
            <ConfirmError showModal={showModalError} setShow={setShowE}/>
            <br/>
            <Footer/>
        </div>
    );
}

export default Signup;
