import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
    <NavBar/> 
    <ItemListContainer greeting= "hola aca van a ir mis productos" img="https://s1.abcstatics.com/media/summum/2020/01/19/zapatillas-2020-khmB--1248x698@abc.jpg"/>
    </div>
  );
}

export default App;
