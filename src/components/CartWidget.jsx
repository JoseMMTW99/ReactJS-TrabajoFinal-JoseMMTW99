import React from "react";

const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn bg-light position-relative">
                <img src="./images/0.carrito.svg" alt="Carrito" width={32}/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">5</span>
            </button>
        </div>
    )
}

export default CartWidget;