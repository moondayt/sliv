import React from "react";

import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Karta from "./img/karta.PNG"

import "./Pages/About.css"

import { Container } from "react-bootstrap";

const Store = () => {
    return (
        <div>
            <Header/>
                <Container>
                    <div className="about__inner">
                        <div className="about__adress">
                            <img className="about__img" src={Karta}/>
                        </div>
                        <div className="about__info">
                            <div className="about__title">Адресс офиса</div>
                            <div className="about__text">
                                г.Иванова, ул. Шевченко, д. 2 <br/> 
                                Понедельник-Пятница с 08.00 до 20.00 <br/>
                                Суббота-Воскресенье с 10.00 до 18.00
                            </div>
                            <div className="about__title">Контакты</div>
                            <div className="about__text">
                                Телефон: 8 (930) 341-84-61 <br/>
                                Email: info@copystar.ru
                            </div>
                        </div>
                    </div>
                </Container>
            <Footer/>
        </div>
    )
}

export default Store;