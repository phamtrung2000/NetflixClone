import React, { useEffect, useState } from 'react';
import './Confirm.css';
import { useHistory } from 'react-router-dom'
import Footer from '../Footer/Footer';
import gif from '../../image/cc.png'

function Confirm({showModal , setShow}){
    let history = useHistory()

    const HandleClick = e =>{
        e.preventDefault();
        history.push('/home')
    }
    return (
        
        <div>
            {   showModal ? 
            <div className="Confirm__modal">
                <div className="Confirm__modal_noti">
                    Thành công
                </div>
                <br/>
                <img src={gif}/>
                <div className="Confirm__modal_text">
                    Chúc mừng bạn đã đăng nhập thành công
                </div>
                <button onClick={HandleClick}> Xác nhận</button>
            </div> 
            : null
}
        </div>
    );
}

export default Confirm;
