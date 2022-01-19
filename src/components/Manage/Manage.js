import React from 'react'
import './Manage.css'
import logo from '../../image/netflixlogo.png'
import avatar from '../../image/avatar.png'
import {Link} from "react-router-dom"
function Manage() {
    return (
        <div className="manage">
            <div className="manage__header">
                <a className="logo">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className="manage__wrapper">
                <h2 className="manage__title">Ai đang xem?</h2>
                <ul className="account__list">
                    <li className="account__list-item" >
                        <a href="/home">                       
                            <img src="https://images.unsplash.com/photo-1633328662602-c41a9bda7bf1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="account__image" alt="" />
                            <span className="account__name">Hagan</span>
                        </a>
                    </li>
                    <li className="account__list-item">
                        <img src="https://images.unsplash.com/photo-1633328662602-c41a9bda7bf1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="account__image" alt="" />
                        <span className="account__name">Hagan</span>
                    </li>
                    <li className="account__list-item">
                        <img src="https://images.unsplash.com/photo-1633328662602-c41a9bda7bf1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="account__image" alt="" />
                        <span className="account__name">Hagan</span>
                    </li>
                    <li className="account__list-item">
                        <img src="https://images.unsplash.com/photo-1633328662602-c41a9bda7bf1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="account__image" alt="" />
                        <span className="account__name">Hagan</span>
                    </li>
                    <li className="account__list-item">
                        <img src="https://images.unsplash.com/photo-1633328662602-c41a9bda7bf1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="account__image" alt="" />
                        <span className="account__name">Hagan</span>
                    </li>
                </ul>
                <span className="manage__button">Quản lí hồ sơ</span>
            </div>
        </div>
    )
}

export default Manage
