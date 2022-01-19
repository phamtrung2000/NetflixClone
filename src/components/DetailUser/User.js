import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import img1 from '../../image/Avatar (1).png'
import img2 from '../../image/mail1.png'
import img3 from '../../image/phone.png'
import img4 from '../../image/gender.png'
import img5 from '../../image/calender.png'
import img6 from '../../image/pass1.png'
import './User.css'
function User(){
    return (
        <div className="User">
            <Header/>
            <div className="User__container">
                <div className="User__button">
                    <button className="button">
                        Sửa thông tin
                        </button>
                </div>
                <div className="User__avt"> 
                    <img src={img1}/>
                </div>
                <div className="User__name">
                    Phạm Trung
                </div>
                <br/>
                <div className="User__logs">
                    <div className="User__logs_card">
                        <div className="User__logs_card-field" style={{marginLeft: "26%"}}>
                            <img src={img2}/>
                            <div className="text">
                                <div style={{color: "grey"}}>
                                    Email
                                </div>
                                <br/>
                                sasukekun123@gmail.com
                            </div>
                        </div>
                    </div>

                    <div className="User__logs_card">
                        <div className="User__logs_card-field" style={{marginLeft: "2%"}} >
                            <img src={img3}></img>
                            <div className="text">
                            <div style={{color: "grey"}}>
                                Số điện thoại
                                </div>
                                <br/>
                                0982460513
                            </div>
                        </div>
                    </div>

                    <div className="User__logs_card">
                        <div className="User__logs_card-field" style={{marginLeft: "26%"}}>
                            <img src={img4}></img>
                            <div className="text">
                            <div style={{color: "grey"}}>
                                Giới tính
                                </div>
                                <br/>
                                Nam
                            </div>
                        </div>
                    </div>
                    <div className="User__logs_card">
                        <div className="User__logs_card-field" style={{marginLeft: "2%"}}>
                            <img src={img5}></img>
                            <div className="text">
                            <div style={{color: "grey"}}>
                                Ngày sinh
                                </div>
                                <br/>
                                (chưa cập nhật)
                            </div>
                        </div>
                    </div>
                    <div className="User__logs_card">
                        <div className="User__logs_card-field" style={{marginLeft: "26%"}}>
                            <img src={img6}></img>
                            <div className="text">
                            <div style={{color: "grey"}}>
                                Mật khẩu
                                </div>
                                <br/>
                                ************
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default User;
