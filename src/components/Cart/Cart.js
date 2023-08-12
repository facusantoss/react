import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <div className="cart-container">
      <h1>Carrito</h1>
      <hr />
      {cart.length === 0 ? (
        <h1>Carrito Vacio</h1>
      ) : (
        <>
          <Row>
            {cart.map(item => (
              <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
                <Card>
                  <Card.Img variant="top" src={item.img}  style={{ height: '200px' }} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text> Cantidad: {item.quantity}</Card.Text>
                    <Card.Text> Precio unitario: {item.price}</Card.Text>
                    <Card.Text> Precio total: {item.price * item.quantity}</Card.Text>
                    <Button
                      variant="danger"
                      className="btn btn-warning"
                      onClick={() => removeItem(item.id)}
                    >
                      Eliminar Producto
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="total-amount">
            <h3>Total de la compra: ${totalAmount}</h3>
          </div>
        </>
      )}

      <Link to="/checkout">
        <button>Finalizar Compra</button>
      </Link>
    </div>
  );
};
export default Cart;
