import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const Checkout = () => {
    const { cart, sumTotal, clear } = useContext(CartContext);

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const confirmarCompra = () => {
        const fecha = new Date();
        const order = {
            buyer: { name: nombre, email: email, phone: telefono },
            items: cart.map(item => ({ id: item.id, title: item.nombre, price: item.precio, quantity: item.quantity, total_price: item.precio * item.quantity })),
            date: `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}   ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
            total: sumTotal()
        }

        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
        })
    }
    
    const borrarCompra = () =>{
        clear();
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="email" className="form-control" id="nombre" placeholder="Ingrese su Nombre" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Ingrese su Email" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input type="number" className="form-control" id="nombre" placeholder="Ingrese su Teléfono" onInput={(e) => { setTelefono(e.target.value) }} />
                        </div>
                        <button type="button" onClick={confirmarCompra} className="btn btn-light">Confirmar Compra</button>
                        <button type="button" onClick={borrarCompra} className="btn btn-light">Borrar Compra</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={64} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.precio}</td>
                                </tr>

                            ))}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center">Suma Total</td>
                                <td className="text-center"><b>${sumTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col">
                    {orderId ? <div className="alert alert-success" role="alert">
                        <h2>Compra Realizada con Éxito</h2>
                        <p>Su número de orden es:{orderId}</p>
                        <p>Usted con esta compra esta participando con <b>{parseInt(sumTotal()/15000)}</b> tickets, los mismos les seran confirmados por correo electrónico y con su número de orden participara del sorteo. Si usted gana lo contactaremos, le deseamos mucha suerte y agracemos por confiar en nosotros!</p>
                        <p className="aviso">Le recomendamos sacar un "screenshot" a los datos con los que registro la compra en este momento si no es titular de la cuenta con la que pago, con los mismos puede hacer un seguimiento del sorteo y reclamar los premios.</p>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;