import React from "react";

import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Slider from "./Components/Slider"

import logo from "./img/logo.png"

import "./Pages/About.css"
import { Container } from "react-bootstrap";

const About = () => {
    return (
        <div>
            <Header/>
                <Container>
                    <div className="about__inner">
                        <div className="about__adress">
                            <img className="about__img" src={logo}/>
                        </div>
                        <div className="about__info">
                            <div className="about__title">Copy Star</div>
                            <div className="about__text">
                                Интернет магазин Copy Star
                            </div>
                        </div>
                    </div>
                </Container>
            <Slider/>
            <Footer/>
        </div>
    )
}

export default About;