import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import swal from 'sweetalert';

export const Checkout = () => {
  const [orderId, setOrderId] = useState();
  const [buyer, setBuyer] = useState({
    fullName: '',
    email: '',
    repeatEmail: '',
    phone: '',
  });
  const { fullName, email, repeatEmail, phone } = buyer;

  const { cart } = useContext(CartContext);

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = cart.reduce((acum, Item) => acum + Item.price * Item.stock, 0);
    const date = new Date();
    const data = { fullName, email, phone, cart, total, date };
    generateOrder(data);
  };

  const generateOrder = async (data) => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'Orders');
    const order = await addDoc(queryCollection, data);
    setOrderId(order.id);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nombre completo:
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Correo electrónico:
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Repetir correo electrónico:
            <input
              type="email"
              name="repeatEmail"
              value={repeatEmail}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Teléfono:
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
        {orderId && <>
          swal ("Felicitaciones tu compra se realizo con exito", "Tu ID de Compra es: {orderId}", "success");
            </>}
      </form>
    </div>
  );
};

export default Checkout;
