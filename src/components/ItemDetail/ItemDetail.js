import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail= ({item}) => {
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.descripcion}</Card.Text>
        <p>$ {item.price}</p>
        <p> Cantidad: {item.stock}</p>
        <div>
            <ItemCount stock={item.stock}/>
        </div>
      </Card.Body>
    </Card>
  );
};
    
export default ItemDetail
