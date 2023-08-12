import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <Link to={"/products/" + item.id} className='text-decoration-none'>
      <Card style={{ width: '18rem' }}className='mb-4'>
        <Card.Img variant="top" src={item.img} style={{ height: '200px' }} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <p>${item.price}</p>
          <Button as="div" variant="dark">Ver detalle</Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Item;
