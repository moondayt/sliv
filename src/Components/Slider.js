import React from "react";


import { Carousel } from "react-bootstrap";

import Slider1 from "../img/Slider/slider.jpg"
import Slider2 from "../img/Slider/slider2.jpg"

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Slider1}
                        alt=""
                    />
                    <Carousel.Caption>
                        <h3>Олень</h3>
                        <p>Тюлень</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Slider2}
                        alt=""
                    />
                    <Carousel.Caption>
                        <h3>Тюлень</h3>
                        <p>Олень</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider;