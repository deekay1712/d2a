import Link from 'next/link';
import React, { useState } from 'react'
// import './navbar.css'
// import { Link } from "react-router-dom";

export default function Navbar() {
    const [toggle,setToggle] = useState(false);
    const [sideBar,setSideBar] = useState(false);
    return (
        <div className="navbarWrapper">
            <div className='navabarLogo'>
                <p>Dream Designers</p>
            </div>
            <ul className={`navbarElements ${sideBar? '' : 'sideBarHide'}`}>
                <li className={`navItem ${sideBar? '' : 'navItemSlide'}`}><Link href="/"><a>HOME</a></Link></li>
                <li className={`navItem ${sideBar? '' : 'navItemSlide'}`}><Link href="/portfolio"><a>PORTFOLIO</a></Link></li>
                <li className={`navItem ${sideBar? '' : 'navItemSlide'}`}><Link href="/services"><a>SERVICES</a></Link></li>
                {/* <li className={`navItem ${sideBar? '' : 'navItemSlide'}`}><Link href="/about-us"><a>ABOUT US</a></Link></li> */}
                <li className={`navItem ${sideBar? '' : 'navItemSlide'}`}><Link href="/contact-us"><a>CONTACT US</a></Link></li>
            </ul>
            <div className='sideDrawer'>
                <button className='toggleButton' onClick = {() => {setToggle(!toggle); setSideBar(!sideBar)}}>
                    <div className={`toggleButtonLine ${!toggle? '' : 'cross'}`}></div>
                    <div className={`toggleButtonLine ${!toggle? '' : 'cross'}`}></div>
                    <div className={`toggleButtonLine ${!toggle? '' : 'cross'}`}></div>
                </button>
            </div>
        </div>
    )
}

