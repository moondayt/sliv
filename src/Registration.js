import React from "react";

import Header from "./Components/Header"
import Footer from "./Components/Footer"

import './Pages/Registration.css'

const Registration = () => {
    return (
        <div>
            <Header/>

                <div className="container_login">
                    <div className="card">
                        <h1>Регистрация</h1>
                        <form>
                            <div>
                                <input className='ipt' placeholder='Имя' type="text" value=""/>
                            </div>
                            <div>
                                <input className='ipt' placeholder='Фамилия' type="text" value=""/>
                            </div>
                            <div>
                                <input className='ipt' placeholder='Отчество' type="text" value=""/>
                            </div>
                            <div>
                                <input className='ipt' placeholder='Логин' type="text" value="" />
                            </div>
                            <div>
                                <input className='ipt' placeholder='E-mail' type="text" value=""/>
                            </div>
                            <div>
                                <input className='ipt' placeholder='Пароль' type="password" value=""/>
                            </div>
                            <input className="submit" type="submit" value="Отправить" />
                        </form>
                    </div>
                </div>

            <Footer/>
        </div>
    )
}

export default Registration;