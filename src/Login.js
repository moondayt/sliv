import React from "react";

import Header from "./Components/Header"
import Footer from "./Components/Footer"

import "./Pages/Login.css"

const Login = () => {
    return (
        <div>
            <Header/>
                <div className="container_login">
                    <div className="card">
                        <h1>Личный кабинет</h1>
                        <form>
                            <div>
                                <input className='ipt' placeholder='Логин' type="text" value="" />
                            </div>
                            <div>
                                <input className='ipt' placeholder='Пароль' type="text" value="" />
                            </div>
                            <input className='submit' type="submit" value="Войти"/>
                        </form>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Login;