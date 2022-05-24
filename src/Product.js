import React, { Component } from 'react';

import Footer from "./Components/Footer.js"

import data from './products.json';
import Cookies from 'universal-cookie';
import Header from './Components/Header';
const cookies = new Cookies();


class Product extends React.Component {
	constructor(props) {
		super(props);
		this.toCart = this.toCart.bind(this);
	}

	getCart() {
		let cart = cookies.get('cart');
		if (typeof cart !== 'undefined') {
			return cart;
		} else {
			return {};
		}
	}

	toCart(event) {
		let id = event.target.attributes.data.value;
		let cart = this.getCart();
		if (id in cart) {
			cart[id]++;
		} else {
			cart[id] = 1;
		}
		let d = new Date();
		d.setTime(d.getTime() + (30 * 60 * 1000));
		cookies.set("cart", JSON.stringify(cart), { path: "/", expires: d });
	}

	render() {
		return (
			<div className="body">
				<div className="Header-block" >
					<Header/>
					<div style={{ display: 'flex', justifyContent: 'center'}}>
						<a 
							style={{ color: 'white', backgroundColor: '#313454', textDecorationStyle: "none", fontWeight: 700, padding: 10, marginTop: 40, borderRadius: 3}} href="/cart">В корзину
						</a>
					</div>
				</div>
				<section className="main">
					<div className="category">
						<div style={{ textAlign: 'center', marginTop: 20}}>	
							<span style={{ fontSize: 50, color: 'black'}}>Цветы</span> 
						</div>
						<div className="wrapper" style={{ display: 'flex', justifyContent: 'center', marginTop: 20}}>
							{data.products.map((item) => 
								<div className="item" style={{ border: "2px solid #313454", padding: 50, margin: 20, textAlign: 'center'}} key={item.key}>
									<img src={require("./img/catalog/tovary/" + item.pict)} width="200" />
									<div className="tittle" style={{ color: 'black', fontSize: 20}}>{item.title}</div>
									<div className="price" style={{ color: 'black', fontSize: 35, fontWeight: 700 }}>{item.price} руб</div>
									<div className="cart"><button style={{ marginTop: 35, color: 'white', backgroundColor: '#313454', padding: 15, paddingLeft: 20, paddingRight: 20, borderRadius: 4}} data={item.key} onClick={this.toCart}>В корзину</button></div>
								</div>)
							}
						</div>
					</div>
				</section>
				<Footer/>
			</div>
		);
	}
}

export default Product;