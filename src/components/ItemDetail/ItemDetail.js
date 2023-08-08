import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../Context/CartContext';
import {useState, useContext } from 'react'

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [stock, setStock] = useState(parseInt(item.stock));

  const handleOnAdd = (count) => {
    
    const newStock = stock - count;
    
    setStock(newStock);

    addItem({ id: item.id, price: item.price, name: item.name, img: item.img }, count);
  };

   
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.descripcion}</Card.Text>
        <p>$ {item.price}</p>
        <p> Cantidad: {item.stock}</p>
        <div>
        <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
        </div>
      </Card.Body>
    </Card>
  );
}

    
export default ItemDetail;
