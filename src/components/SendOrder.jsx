import React from 'react';
import { useState, useContext } from 'react';
import { collection, getFirestore, addDoc } from 'firebase/firestore';
import { CartContext } from '../context/ShoppingCartContext';

const SendOrder = () => {
    const [orderId, setOrderId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [cart] = useContext(CartContext);

    const enviarFormulario = (e) => {
        e.preventDefault();
        if ((name === "") || (email === "") || (tel === "")) {
            Swal.fire(
                'Campos obligatorios',
                'Completa los campos faltantes',
                'warning'
            )
        } else {
            addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '¡Travesura realizada!',
                showConfirmButton: false,
                timer: 1500
            })
        }
    };

    const dataBase = getFirestore();
    const ordersCollection = collection(dataBase, "orden");
    const order = { name, email, tel, cart };

    return (
        <div>
            <form onSubmit={enviarFormulario} action="" className='form'>
                <input type="text" placeholder='Nombre y Apellido' onChange={(e => setName(e.target.value))} />
                <input type="email" placeholder='Correo' onChange={(e => setEmail(e.target.value))} />
                <input type="tel" placeholder='Celular' onChange={(e => setTel(e.target.value))} />
                <button type='submit'>Confirmar Compra</button>
            </form>
            <h4>Orden N° #{orderId}</h4>
        </div>
    )
}

export default SendOrder