import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemDetailConteiner from "../src/components/ItemDetailContainer/ItemDetailContainer";
import Error404 from "./components/Error404";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar/> 

      <Routes> 
        <Route>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailConteiner/>}/>
          <Route path="/Cart" element={<CartWidget/>}/>
          <Route path="/*" element={<Error404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
