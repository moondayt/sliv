import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import data from './products.json';

import Header from "./Components/Header.js"
import Footer from "./Components/Footer.js"

const cookies = new Cookies();


class Cart extends React.Component {
  constructor(props) {
    super(props);
	this.minusHandler = this.minusHandler.bind(this);
	this.plusHandler = this.plusHandler.bind(this);
	this.delHandler = this.delHandler.bind(this);
  }
  
  minusHandler(event) {
	let id = event.target.attributes.data.value;
	let cart = this.getCart();
	if (id in cart) {
		if (cart[id] > 1) {
			cart[id]--;
		}
	}
	let d = new Date();
	d.setTime(d.getTime() + (30*60*1000));
	cookies.set("cart", JSON.stringify(cart), {path: "/", expires: d});
	this.forceUpdate()
  }
  
  plusHandler(event) {
	let id = event.target.attributes.data.value;
	let cart = this.getCart();
	if (id in cart) {
		cart[id]++;
	}
	let d = new Date();
	d.setTime(d.getTime() + (30*60*1000));
	cookies.set("cart", JSON.stringify(cart), {path: "/", expires: d});
	this.forceUpdate()
  }
  delHandler(event) {
	let id = event.target.attributes.data.value;
	let cart = this.getCart();
	if (id in cart) {
		delete cart[id];
	}
	let d = new Date();
	d.setTime(d.getTime() + (30*60*1000));
	cookies.set("cart", JSON.stringify(cart), {path: "/", expires: d});
	this.forceUpdate()
	}

	totalCount(event) {
		console.log(123);
		alert("Ваш заказ принят!\nСкоро мы свяжимся с вами для уточния заказа\n \n \nВаш магазин Цветочный домик")
	}
  getCart() {
	  let cart = cookies.get('cart');
	  if (typeof cart !== 'undefined') {
		return cart;
	  } else {
		return {};
	  }
  }

  render() {
	let cart = this.getCart();
	let products = [];
	
	console.log('cart',cart);
	for (var key in cart) {
		for (var product of data.products) {
			if (product.key == key) {
				products.push({
					"key":product.key, "title": product.title, "price": product.price, "pict": product.pict, "amount": cart[key]
				});
			}
		}
	  }

	
	  return (
		  <div className="body">
			  	<div className="Header-block" >
				<Header/>
				  	<div 
						style={{ display: 'flex', justifyContent: 'center' }}><a style={{ color: 'white', backgroundColor: '#313454', textDecorationStyle: "none", fontWeight: 700, padding: 10, margin: 30, borderRadius: 3, textDecoration: "none" }} href="/cart">В корзину</a>
					</div>
			  		</div>
			  			<section className="main">
    						<div className="cart">
					  			<div className="wrapper" style={{ display: 'flex', justifyContent: 'center'}}>
									{products.map((item) => 
										<div className="item" style={{ border: "2px solid #313454", margin: 15, padding: 40, textAlign: 'center'}}key={item.key}>
											<a href="/astronomy-pink"><img src={require("./img/catalog/tovary/" + item.pict)} width="200" /></a>
											<div className="tittle" style={{ color: 'black', fontSize: 22 }}>{item.title}</div>
											<div className="amount" style={{ color: 'black', fontSize: 15, fontWeight: 700 }}>Количество: <span>{item.amount}</span></div>
											<div className="buttons">
												<button data={item.key} style={{ color: 'white', backgroundColor: "#313454", fontSize: 20, paddingLeft: 10, paddingRight: 10 }} onClick={this.minusHandler}>-</button>
												<button data={item.key} style={{ color: 'white', backgroundColor: "#313454", fontSize: 20, paddingLeft: 10, paddingRight: 10 }} onClick={this.plusHandler}>+</button>
												<button data={item.key} style={{ color: 'white', backgroundColor: "#313454", fontSize: 20, paddingLeft: 10, paddingRight: 10 }} onClick={this.delHandler}>X</button>
											</div>
										</div>
									)}		
								</div>
							</div>
						<div className="total" style={{display: 'flex', justifyContent: 'center', marginBottom: 100}}>
							<button  style={{ color: 'white', backgroundColor: "#313454", fontSize: 20, paddingLeft: 10, paddingRight: 10, padding: 10, borderRadius: 4 }} onClick={this.totalCount}>Офрмить заказ</button>
						</div>
						</section>
				<Footer/>
			</div>
		);
	}
}

export default Cart