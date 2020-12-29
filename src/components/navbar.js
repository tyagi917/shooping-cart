import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../global/cartcontext.js';

const Navbar=()=>
{
	const{cart,disptach}=useContext(CartContext);
  console.log(cart)
  const {qty}=cart;
  console.log(qty);
	return(
		<nav>
		<ul className="left">
		<li><Link to="/">Home</Link></li>
		</ul>
		<ul className="right">
		<li><Link to="/cart">
		<span className="shoppingcart">goto cart<i class="fas fa-cart-plus"></i>
		<span className="cartcount">{qty}</span></span>
		</Link></li>
		</ul>


		</nav>
		)
}

export default Navbar;