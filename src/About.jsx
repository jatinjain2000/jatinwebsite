import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./Context";

import axios from "axios";
const Shoe_URL = 'http://localhost:8080/shoes';

const About = () => {
    const { udpateAboutPage } = useGlobalContext();
    useEffect(() => {
        axios.get("http://localhost:8080/shoes").then((res) => console.log("dfhajhdja", res.data));
    }, [])
    useEffect(() => udpateAboutPage(), []);

    return <HeroSection />;
};

export default About;