import React from "react";
import { Link } from "react-router-dom";

const CheckoutEnd = () => {
    return (
        <div className="container py-5">
            <div className="col-md-12 text-center">
                <div className="alert alert-danger" role="alert">
                    <h1>Gracias por su Compra!</h1>
                    <p>En los próximos 5 a 7 días habiles los productos les serán entregados en su domicilio. Ante cualquier consulta nos puede contactar por cualquiera de nuestras redes sociales. Con el ID de la compra puede hacerle seguimiento al correo sobre su pedido (trabajamos unicamente con Andreani). Saludos cordiales, Venta Gamer.</p>
                </div>
                <div className="btn">
                    <Link to={"/"} className="btn btn-outline-dark">Volver a la Página Principal</Link>
                </div>
            </div>
        </div>
    )
}

export default CheckoutEnd;