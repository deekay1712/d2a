import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

// export default function Navbar({navColor}) {
export default function Navbar() {
    // console.log('navColor : ',navColor);
    const router = useRouter();
    const [toggle,setToggle] = useState(false);
    const [sideBar,setSideBar] = useState(false);
    const [isHome,setIsHome] = useState(true);
    useEffect(() => {
        // if(router.pathname === '/'){
        //     setIsHome(true);
        // }else{
        //     setIsHome(false);
        // }
    }, [router.pathname])
    return (
        // <div className={`navbarWrapper ${navColor||(!isHome)?'navBarWhite': ''}`}>
        <div className="navbarWrapper">
            <div className='navbarLogo'>
                <Link href="/" >
                    {/* <a><img className='navbarLogoImg' src="/Assets/LogoBlack.png" alt="" /></a> */}
                    <a>
                        <span className='navbarLogoText'>D2A Atelier</span>
                    </a>
                </Link>
            </div>
            <ul className={`navbarElements ${sideBar? '' : 'sideBarHide'}`}>
                <li onClick = {() => {setToggle(false); setSideBar(false)}} className={`navItem ${sideBar? '' : 'navItemSlide'}`}><Link href="/" ><a>HOME</a></Link></li>
                <li onClick = {() => {setToggle(false); setSideBar(false)}} className={`navItem ${sideBar? '' : 'navItemSlide'}`}><Link href="/portfolio"><a>PORTFOLIO</a></Link></li>
                <li onClick = {() => {setToggle(false); setSideBar(false)}} className={`navItem ${sideBar? '' : 'navItemSlide'}`}><Link href="/services"><a>SERVICES</a></Link></li>
                <li onClick = {() => {setToggle(false); setSideBar(false)}} className={`navItem ${sideBar? '' : 'navItemSlide'}`}><Link href="/about-us"><a>ABOUT US</a></Link></li>
                <li onClick = {() => {setToggle(false); setSideBar(false)}} className={`navItem ${sideBar? '' : 'navItemSlide'}`}><Link href="/contact-us"><a>CONTACT US</a></Link></li>
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

