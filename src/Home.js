import React from "react";

//import "../Pages/Home.css"

import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Slider from "./Components/Slider"

const Home = () => {
    return (
        <div>
            <Header/>
            <Slider/>

            <div class="home">
                    <div class="container">
                        <div class="home__inner">
                            <p class="home__title">Преимущества интернет магазина «Цветочный домик»</p>
                            <p class="company__text">Наш магазин цветов предоставляет гарантию качества реализуемой нами продукции, подтверждающегося множеством благодарных отзывов. Доставьте радость своим близким благодаря букету, созданному руками умельца флористики, оригинальной и классической цветочной композиции. Наши преимущества обусловлены:</p>
                            <ul className="company__text company__text__ul">
                                <li type="disc">Возможностью заказа оптовых и розничных партий цветов</li>
                                <li type="disc">Дружной и умелой командой опытных профессионалов</li>
                                <li type="disc">Обширным выбором цветов, соответствующим любым вкусам и предпочтениям</li>
                                <li type="disc">Возможностью оплаты удобными покупателю способами</li>
                                <li type="disc">Постоянными скидками, акциями, предназначенными постоянным и новым клиентам</li>
                                <li type="disc">Оперативной доставкой, соответствующей пожеланиям заказчиков</li>
                            </ul>
                            <div className="company__text">Наша компания обеспечивает взаимовыгодную основу сотрудничества, важную для постоянных заказчиков и благодарных покупателей. В основе нашей деятельности лежит ответственный подход к делу, внимательное отношение к клиентам. Современные тенденции флористики соответствуют неугасающей моде живописных букетов, отличающихся оформлением. Мы порадуем вас изумительным цветочным набором, чтобы восхитить свою возлюбленную, потрясающим букетом, соответствующим юбилею или именинам.</div>
                            <p className="company__text">Мы подберем цветочный букет вашим друзьям или коллегам, вашей возлюбленной или маме. Если у вас не хватает времени, чтобы сделать выбор подарка, воспользуйтесь доставкой цветов, организованной магазином цветов «Цветочный домик» в Иваново. Цветы с доставкой являются универсальным способом, чтобы продемонстрировать свои чувства. Обращайтесь к нам, чтобы порадовать именинника цветочной композицией, которая станет воплощением вашего искреннего отношения.</p>
                        </div>
                    </div>
                </div>

            <Footer/>
        </div>
    )
}

export default Home;