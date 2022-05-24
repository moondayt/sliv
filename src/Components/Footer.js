import React from "react";
import { Container } from "react-bootstrap";

import "../Pages/Footer.css"

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <Container>
                    <div className="footer__inner">

                        <div className="footer__block">
                            <h4 className="footer__title">Наши контакты</h4>
                            <address className="footer__adress">
                                <div>г. Владимир, ул. Мира, д.20</div>
                                <div>ПН-ПТ с 08.00 до 20.00; СБ-ВС с 10.00 до 18.00</div>
                                <div>Email: info@copystar.ru</div>
                            </address>
                        </div>

                        <div className="footer__block">
                            <h4>Ссылки</h4>
                            <div className="footer__li">
                                <li><a className="footer__links"></a>Войти</li>
                                <li><a className="footer__links"></a>Регистрация</li>
                                <li><a className="footer__links"></a>Каталог</li>
                                <li><a className="footer__links"></a>Корзина</li>
                            </div>
                        </div>

                    </div>
                </Container>
            </footer>
        </div>
    )
}

export default Footer;