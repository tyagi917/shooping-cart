import './App.css';
import Navbar from './components/navbar.js';
import Banner from './components/banner.js';
import ProductsContextProvider from './global/productscontest.js';
import Products from './components/products.js';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Cart from './components/cart.js';
import CartContextProvider from './global/cartcontext.js';


function App() {
  return (
    <div >
     
    <ProductsContextProvider>
    <CartContextProvider>
    <Router>
     <Navbar/>
     
    <Switch>
    <Route path="/" exact component={Products}/>
    <Route path="/cart" component={Cart}/>
 </Switch>
    </Router>
    </CartContextProvider>
      
       </ProductsContextProvider>
    </div>
  );
}

export default App;
