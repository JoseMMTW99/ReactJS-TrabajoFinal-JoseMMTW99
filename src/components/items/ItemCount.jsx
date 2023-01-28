import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stockItems, onAdd }) => {
    const [counter, setCounter] = useState (1);
    const [stock, setStock] = useState (stockItems);
    const [vendido, setVendido] = useState (false); 

    useEffect(()=>{
        setStock(stockItems);
    },[stockItems]);


    const incrementarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }
    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const agregarAlCarrito = (quantity) => {
        setStock(stock-quantity);
        setVendido(true);
        onAdd(quantity);
        setCounter(1);
    }

    return (
        <div className="container text-center">
            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-dark" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-outline-dark">{counter}</button>
                        <button type="button" className="btn btn-outline-dark" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mb-3">
                    {vendido ? <Link to={"/cart"} className="btn btn-outline-dark">Ir al Carrito</Link>: <button className="btn btn-outline-dark" onClick={()=>{agregarAlCarrito(counter)}}>Agregar al carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;