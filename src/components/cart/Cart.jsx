import React, { useContext } from "react";
import {CartContext} from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, removeItem, clear, cartTotal, sumTotal} = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">No se encontraron Productos en el Carrito</div>
                        <Link to={"/"} className="text-decoration-none text-dark">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <td colSpan={3}>&nbsp;</td>
                                <th scope="col" className="text-center"><Link onClick={clear} className="text-decoration-none text-dark" title="Vaciar Carrito">Vaciar Carrito</Link></th>
                                <td className="text-center align-middle"><Link onClick={clear} title="Vaciar Carrito"><img src={"images/0.delete.svg"} alt={"Eliminar Producto"} width={24} /></Link></td>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={64} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.precio}</td>
                                    <td className="text-center align-middle"><Link onClick={() => {removeItem(item.id)}} title="Eliminar Producto"><img src={"images/0.trash.svg"} alt={"Eliminar Producto"} width={24} /></Link></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center">Suma Total</td>
                                <td className="text-center"><b>${sumTotal()}</b></td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center">Tickets Totales</td>
                                <td className="text-center"><b>{parseInt(sumTotal()/15000)}</b></td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td colSpan={5} className="text-center align-middle"><Link to={"./checkout"} className="text-decoration-none text-dark btn btn-light" title="Finalizar Compra">Finalizar Compra</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;