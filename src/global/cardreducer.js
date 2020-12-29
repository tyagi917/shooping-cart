export const CartReducer=(state,action)=>
{
	 let {shoppingCart, totalPrice, qty} = state;
    let product;
    let index;
    let updatedPrice;
    let updatedQty;
    switch(action.type){
        case 'add_to_cart':
        console.log("yes"); 
        const check = shoppingCart.find(cart => cart.id === action.id);
        if(check){
            // return state;
            return state;
        } else {
        	product=action.product;
            product['qty'] = 1;
            updatedQty = qty + 1;
            updatedPrice=totalPrice+product.price;
  return {shoppingCart: [product,...shoppingCart], totalPrice:updatedPrice,  qty: updatedQty};
        }
        break;
        case 'INC':
        product=action.cart;
        product.qty=product.qty+1;
        updatedPrice=totalPrice+product.price;
        updatedQty=qty+1;
        index=shoppingCart.findIndex(cart=>cart.id===action.id);
        shoppingCart[index]=product;
        return{
            shoppingCart:[...shoppingCart],totalPrice:updatedPrice,qty:updatedQty
        }
        break;
        case 'DEC':
        product=action.cart;
        product.qty=product.qty-1;
        updatedPrice=totalPrice-product.price;
        updatedQty=qty-1;
        index=shoppingCart.findIndex(cart=>cart.id===action.id);
        shoppingCart[index]=product;
        return{
            shoppingCart:[...shoppingCart],totalPrice:updatedPrice,qty:updatedQty
        }
        break;
        case 'DEL':
        product=action.cart;
        const filter=shoppingCart.filter(cart=>cart.id!==action.id);
        console.log(filter);
        updatedQty=qty-product.qty;
        updatedPrice=totalPrice-product.price*product.qty;
        return{
            shoppingCart:[...filter],totalPrice:updatedPrice,qty:updatedQty
        }
        break;


        default: return state;
    }



}