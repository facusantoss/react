import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemDetailContainer from "../src/components/ItemDetailContainer/ItemDetailContainer";
import Error404 from "./components/Error404";
import { Checkout } from './components/Checkout/Checkout';
import CartProvider from './components/Context/CartContext';
import { Cart } from '../src/components/Cart/Cart';


function App() {
  return (
    <div className="App">
      <CartProvider>
    <BrowserRouter>
      <NavBar/> 

      <Routes> 
        <Route>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/Cart" element={<CartWidget/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/*" element={<Error404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </div>
  );
}

export default App;
