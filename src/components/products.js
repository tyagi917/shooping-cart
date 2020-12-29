import React,{useContext} from 'react';
import {ProductsContext} from '../global/productscontest.js';
import {CartContext} from '../global/cartcontext.js';
import Banner from './banner.js';

const Products=()=>
{
	const {products}=useContext(ProductsContext);
	const {cart,dispatch}=useContext(CartContext);
	
	console.log(products);
	
	return(
		<div>
		<div className="products">
		{
			products.map((product)=>(

				<div className="product" key={product.id}>
				<div className="product-image">
				<img src={product.image} alt="not Found"/>
				</div>
				<div className="product-detail">
				<div className="product-name">{product.name}
				</div>
				<div  className="product-price">
				${product.price}.00
				</div>

				</div>
				<div className="cart" onClick={()=>dispatch({type:"add_to_cart",id:product.id,product:product})}
				>Add to cart</div>
				{product.status==='hot'?<div className="hot">HOT</div>:""}
				{product.status==='new'?<div className="new">NEW</div>:""}
			
				</div>
			))}


		</div>
		</div>

	)
}
export default Products;