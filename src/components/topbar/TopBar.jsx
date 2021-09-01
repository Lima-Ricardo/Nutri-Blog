import React from 'react'
import "./topbar.css"

export default function topbar() {
    return (
        <div className="top">
            <div className="topLeft">l
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter"></i>
            <i className="topIcon fab fa-pinterest-p"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUTE</li>
                    <li className="topListItem">CONTATCT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img
                className="topImg" 
                src="https://images.pexels.com/photos/1201397/pexels-photo-1201397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

