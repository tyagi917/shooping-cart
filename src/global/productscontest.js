import React,{createContext,useState} from 'react';

import headphone from '../assests/pexels-farhan-ishraq-rudra-375751.jpg';
import headphone1 from '../assests/pexels-splitshire-1591 (1).jpg';
import camera from '../assests/pexels-kaique-rocha-3135801.jpg';
import camera1 from '../assests/pexels-nick-bondarev-4413741.jpg';
import mobile from '../assests/pexels-hasan-albari-1209435.jpg';
import mobile1 from '../assests/pexels-tracy-le-blanc-607812.jpg';
import Products from '../components/products.js';
export const ProductsContext=createContext();
const ProductsContextProvider=(props)=>
{
	const[products]=useState([
	{id:1,name:"headphone",price:300,image:headphone,status:'hot'},
	{id:2,name:"headphone",price:400,image:headphone1,status:'hot'},
	{id:3,name:"camera",price:250,image:camera,status:'new'},
	{id:4,name:"camera1",price:300,image:camera1,status:'new'},
	{id:5,name:"mobile",price:450,image:mobile,status:'hot'},
	{id:6,name:"mobile1",price:500,image:mobile1,status:'new'},
	{id:7,name:"mobile1",price:500,image:mobile1,status:'new'},
	{id:8,name:"mobile1",price:500,image:mobile1,status:'new'},
	{id:9,name:"mobile1",price:500,image:mobile1,status:'new'}
])
	console.log(products);
	return(
		<ProductsContext.Provider value={{products:[...products]}}>
		{props.children}
		</ProductsContext.Provider>
		)
}
export default ProductsContextProvider;