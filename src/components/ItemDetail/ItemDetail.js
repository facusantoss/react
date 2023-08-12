import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../Context/CartContext';
import {useState, useContext, useEffect } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [stock, setStock] = useState(item.stock);

  useEffect(() => {
    const fetchItem = async () => {
      const db = getFirestore();
      const productsCollection = collection(db, 'products');
      const querySnapshot = await getDocs(productsCollection);

      querySnapshot.forEach((doc) => {
        if (doc.id === item.id) {
          const data = doc.data();
          setStock(data.stock);
        }
      });
    };

    fetchItem();
  }, [item.id]);

  const handleOnAdd = (counter) => {
    const newStock = stock - counter;
    setStock(newStock);

    addItem({ id: item.id, price: item.price, name: item.name, img: item.img }, counter);
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
