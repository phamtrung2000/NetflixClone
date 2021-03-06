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
                                Ch??o m???ng b???n!
                        </div>
                        <div className="Signup__modal-content">
                                Tham gia Netflix th???t ????n gi???n.
                        </div>
                        <div className="Signup__modal-panel">
                            <br/>
                            <a>
                                <input type="email" placeholder="Email ho???c s??? ??i???n tho???i" id='mail'></input>
                            </a>
                            <a>
                                <input  type="password" placeholder="M???t kh???u" id='password' ></input>
                            </a>
                            <a>
                                <input  type="password" placeholder="Nh???p l???i m???t kh???u" id='repass'></input>
                            </a>
                        </div>
                        <div className="Signup__modal-panel">
                            <br/>
                            <button onClick={LoginHandler}>????ng k??</button>
                        </div>
                        <div className="Signup__modal-tocheck">
                            <a className="Signup__tocheck-Bx">
                                <input type="checkbox" style={{border: "1px solid red"}}></input>
                                <span>
                                    T??i ?????ng ?? v???i c??c ??i???u kho???n, ??i???u ki???n {"&"} ch??nh s??ch c???a Netflix.
                                </span>
                            </a>
                        </div>
                        <br/>
                        <div className="Signup__modal-divide">
                            <div className="Signup__modal-divide-bar"></div>
                            <div className="Signup__modal-divide-content" style={{fontSize: "10px", color:"gray"}}>Ho???c</div>
                            <div className="Signup__modal-divide-bar"></div>
                        </div>
                        <br/>
                        <p style={{color: "whitesmoke", fontSize:"12px", marginTop: "-1%"}}>B???n ???? c?? t??i kho???n? <a href="/login">
                                ????ng nh???p
                        </a> t???i ????y</p>
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
