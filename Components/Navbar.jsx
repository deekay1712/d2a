import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
    const [toggle,setToggle] = useState(false);
    const [sideBar,setSideBar] = useState(false);
    return (
        <div className="navbarWrapper">
            <div className='navbarLogo'>
                <img src="Assets/LogoBlack.png" alt="" />
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

