import React from "react";
 
import "../Pages/Footer.css"
import { 
    Navbar,
    Container,
    Nav,

 } from "react-bootstrap";


const Header = () => {
    return (
        <Navbar bg="light" varinar="dark">
            <Container>
                <Navbar.Brand href="/">Copy Star</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/about">О нас</Nav.Link>
                    <Nav.Link href="/catalog">Каталог</Nav.Link>
                    <Nav.Link href="/store">Где нас найти?</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/register">Регистрация</Nav.Link>
                    <Nav.Link href="/login">Логин</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}


export default Header;