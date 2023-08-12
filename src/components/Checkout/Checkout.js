import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import swal from 'sweetalert';

export const Checkout = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email !== repeatEmail) {
      swal('Error', 'Los emails no coinciden', 'error');
      return;
    }

    if (!/^\d+$/.test(phone)) {
      swal('Error', 'El teléfono solo debe contener números', 'error');
      return;
    }

    const total = cart.reduce((acum, item) => acum + (item.price * item.quantity), 0);
    const date = new Date();
    const data = { buyer, cart, total, date };

    try {
      const orderId = await generateOrder(data);
      swal("Felicitaciones, tu compra se realizó con éxito", `Tu ID de Compra es: ${orderId}`, "success");
    } catch (error) {
      swal("Error", "Hubo un problema al generar la orden", "error");
    }
  };

  const generateOrder = async (data) => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'Orders');
    const order = await addDoc(queryCollection, data);
    return order.id; // Devolvemos el ID del pedido
  };
  

  return (
    <div>
      <h2>Formulario</h2>
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
              pattern="[0-9]*"
              required
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Checkout;
