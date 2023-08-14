import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useStore } from "../store";

// export default function Navbar({navColor}) {
export default function Navbar() {
	// console.log('navColor : ',navColor);
	const router = useRouter();
	const [toggle, setToggle] = useState(false);
	const [sideBar, setSideBar] = useState(false);
	const [isHome, setIsHome] = useState(true);
	const { state } = useStore();
	useEffect(() => {
		// if(router.pathname === '/'){
		//     setIsHome(true);
		// }else{
		//     setIsHome(false);
		// }
	}, [router.pathname]);
	return (
		// <div className={`navbarWrapper ${navColor||(!isHome)?'navBarWhite': ''}`}>
		<div className='navbarWrapper'>
			<div className='navbarLogo'>
				<Link href='/'>
					<a><img className='navbarLogoImg' src="/Assets/LogoBlack2.jpg" alt="" /></a>
					{/* <a>
						<span className='navbarLogoText'>Studio Precise</span>
					</a> */}
				</Link>
			</div>
			<ul className={`navbarElements ${sideBar ? "" : "sideBarHide"}`}>
				<li
					onClick={() => {
						setToggle(false);
						setSideBar(false);
					}}
					className={`navItem ${sideBar ? "" : "navItemSlide"}`}>
					<Link href='/'>
						<a>HOME</a>
					</Link>
				</li>
				<li
					onClick={() => {
						setToggle(false);
						setSideBar(false);
					}}
					className={`navItem ${sideBar ? "" : "navItemSlide"}`}>
					<Link href='/about-us'>
						<a>ABOUT US</a>
					</Link>
				</li>
				<li
					onClick={() => {
						setToggle(false);
						setSideBar(false);
					}}
					className={`navItem ${sideBar ? "" : "navItemSlide"}`}>
					<Link href='/services-we-offer'>
						<a>SERVICES</a>
					</Link>
				</li>
				<li
					onClick={() => {
						setToggle(false);
						setSideBar(false);
					}}
					className={`navItem ${sideBar ? "" : "navItemSlide"}`}>
					<Link href='/faqs'>
						<a>FAQs</a>
					</Link>
				</li>
				<li
					onClick={() => {
						setToggle(false);
						setSideBar(false);
					}}
					className={`navItem ${sideBar ? "" : "navItemSlide"}`}>
					<Link href='/contact-us'>
						<a>CONTACT US</a>
					</Link>
				</li>
			</ul>
			<div className='sideDrawer'>
				<button
					className='toggleButton'
					onClick={() => {
						setToggle(!toggle);
						setSideBar(!sideBar);
					}}>
					<div className={`toggleButtonLine ${!toggle ? "" : "cross"}`}></div>
					<div className={`toggleButtonLine ${!toggle ? "" : "cross"}`}></div>
					<div className={`toggleButtonLine ${!toggle ? "" : "cross"}`}></div>
				</button>
			</div>
			<a
				href='https://wa.me/919990632664'
				target='_blank'
				rel='noreferrer'
				className='whatsappChatButton'>
				<img src='/Assets/whatsapp.png' alt='whatsapp' />
				Work with us?
			</a>
		</div>
	);
}
