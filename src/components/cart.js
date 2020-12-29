import React,{useContext} from 'react';
import {CartContext} from '../global/cartcontext.js';
import StripeCheckout from 'react-stripe-checkout';
const Cart=()=>
{
	const {cart,dispatch}=useContext(CartContext);
	console.log(cart);
	const{shoppingCart,totalPrice,qty}=cart;
	//const {shoppingCart,totalPrice,qty,dispatch}=useContext(CartContext);
	console.log(shoppingCart);
	console.log(qty);
	console.log(totalPrice);
	
	return(
		<div className="cart-container">
		<div className="card-details">
		{shoppingCart.length>0?
			shoppingCart.map(cart=>(
		<div className="carts" key={cart.id}>
		<span className="cart-image"><img src={cart.image} alt="not found"/></span>
		<span className="cart-product-name">{cart.name}</span>
		<span className="cart-product-price">{cart.price}</span>
		<span className="inc" onClick={()=>dispatch({
			type:'INC',id:cart.id,cart
		})}><i class="fas fa-plus" ></i></span>
		<span className="product-quantity">{cart.qty}</span>
		<span className="dec" onClick={()=>dispatch({
			type:'DEC',id:cart.id,cart
		})}><i class="fas fa-minus"></i></span>
		<span className="product-total-price">{cart.price*cart.qty}</span>

		<span className="deleted" onClick={()=>dispatch({
			type:"DEL",id:cart.id,cart
		})}><i class="fas fa-trash"></i></span>

		</div> 
		))

			:'Sorry your cart is currenty empty'}
		</div>
		{ shoppingCart.length>0?<div className="cart-summary">
		<div className="summary">
		<h3>Cart Summary</h3>
		<div className="total-Item">
		<div className="items">Total Items</div>
		<div className="items-count">{qty}</div>
		</div>
		<div className="total-price">
		<div className="just-title">Total Price</div>
		<div className="price">${totalPrice}</div>
		</div>
		<div className="stripe-section">
		<StripeCheckout>
		</StripeCheckout>

		</div>
		</div>
		</div>

		:""}

		
		</div>

	)
}
export  default Cart;