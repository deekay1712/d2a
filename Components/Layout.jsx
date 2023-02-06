import React from "react";
import { useEffect } from "react";
import { useStore } from "../store";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SuperFooter from "./SuperFooter";

const Layout = ({ children }) => {
    // const [navColor, setNavColor] = React.useState(false);
    // const listenScrollEvent = (event) => {
    //   if (window.scrollY < 60)
    //     return setNavColor(false);
    //    else if (window.scrollY > 60) 
    //     return setNavColor(true);
    // };
    // useEffect (() => {
    //   window.addEventListener("scroll", listenScrollEvent);
    //   return () => window.removeEventListener("scroll", listenScrollEvent);
    // }, []);

    const { setState } = useStore();
    useEffect(() => {
        const fetchCountry = async () => {
            const res = await fetch("https://ipapi.co/json/");
            const data = await res.json();
            setState({ isIndia: data.country_name === "India" })
        }
        fetchCountry();
    }, [])

    return (
        <>
            {/* <Navbar navColor={navColor} /> */}
            <Navbar />
            {children}
            <Footer />
            <SuperFooter />
        </>
    );
};

export default Layout;
