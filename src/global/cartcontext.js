import  React,{createContext,useReducer} from 'react';
import Products from '../components/products.js';


import {CartReducer} from './cardreducer.js';
export const CartContext=createContext();
const CartContextProvider=(props)=>
{
	const[cart,dispatch]=useReducer(CartReducer,{shoppingCart:[],totalPrice:0,qty:0});
	console.log(cart);
	return(
	
		<CartContext.Provider value={{cart,dispatch}}>
		{props.children}
		</CartContext.Provider>
		
	)
}
export default CartContextProvider;