import React, { useEffect, useState } from 'react';
import './Confirm.css';
import Footer from '../Footer/Footer';
import gif from '../../image/error.png'

function ConfirmSigninError({showModal , setShow}){
    const HandleClick = e =>{
        e.preventDefault();
        setShow(false);
    }
    return (
        
        <div>
            {   showModal ? 
            <div className="Confirm__modal">
                <div className="Confirm__modal_noti">
                    Thất bại
                </div>
                <br/>
                <img src={gif}/>
                <div className="Confirm__modal_text">
                   Vui lòng kiểm tra lại thông tin đăng ký
                </div>
                <button onClick={HandleClick}> Xác nhận</button>
            </div> 
            : null
}
        </div>
    );
}

export default ConfirmSigninError;
