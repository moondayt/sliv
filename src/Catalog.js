import React from "react";

import Header from "./Components/Header.js"
import Footer from "./Components/Footer.js"

import "./Pages/Catalog.css"

import cart_1 from "./img/catalog/category/main1.png"
import cart_2 from "./img/catalog/category/main2.png"
import cart_3 from "./img/catalog/category/main3.png"
import cart_4 from "./img/catalog/category/main4.png"
import cart_5 from "./img/catalog/category/main5.png"
import cart_6 from "./img/catalog/category/main6.png"
import cart_7 from "./img/catalog/category/main7.png"
import cart_8 from "./img/catalog/category/main8.png"
import cart_9 from "./img/catalog/category/main9.png"
import cart_10 from "./img/catalog/category/main10.png"
import cart_11 from "./img/catalog/category/main11.png"
import cart_12 from "./img/catalog/category/main12.png"
import cart_13 from "./img/catalog/category/main13.png"
import cart_14 from "./img/catalog/category/main14.png"
import cart_15 from "./img/catalog/category/main15.png"

const Catalog = () => {
	return (
		<div className="body">
			<div className="Header-block" >
			<Header/>
			</div>
			<section className="main">
				<div className="container">
					<div className="catalog">
						<div className="Catalog-tittle" style={{ textAlign: "center" }}> 
							<p style={{ fontSize: 40, fontWeight: 600, color: "black", padding: 20, }}> Наши категории</p>
						</div>
						<div className="Catalog-list">
							<a className="catalog__card" href="/product" ><img className="img" src={cart_1} /></a>
							<a className="catalog__card"  href="/product" ><img className="img" src={cart_2} /></a>
							<a className="catalog__card"  href="/product" ><img className="img" src={cart_3} /></a>
							<a className="catalog__card"  href="/product" ><img className="img" src={cart_4} /></a>
							<a className="catalog__card"  href="/product" ><img className="img" src={cart_5} /></a>
							<a className="catalog__card"  href="/product" ><img className="img" src={cart_6} /></a>
							<a className="catalog__card"  href="/product" ><img className="img" src={cart_7} /></a>
							<a className="catalog__card"  href="/product" ><img className="img" src={cart_8} /></a>
							<a className="catalog__card"  href="/product" ><img className="img" src={cart_9} /></a>
							<a className="catalog__card"  href="/product" ><img className="img" src={cart_10} /></a>
							<a className="catalog__card"  href="/product" ><img className="img" src={cart_11} /></a>
							<a className="catalog__card"  href="/product" ><img className="img" src={cart_12} /></a>
							<a className="catalog__card"  href="/product" ><img className="img" src={cart_13} /></a>
							<a className="catalog__card"  href="/product" ><img className="img" src={cart_14} /></a>
							<a className="catalog__card"  href="/product" ><img className="img" src={cart_15} /></a>
						</div>
					</div>
				</div>
			</section>
			<Footer/>
		</div>
	);
};

export default Catalog;