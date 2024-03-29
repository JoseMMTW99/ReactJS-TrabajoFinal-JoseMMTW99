import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail=({item})=>{
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) =>{
        addItem(item, quantity);
    }
    return(
        <div className="row">
            <div className="col-md-6 offset-md-3 text-center mt-5">
                <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
                <p><b>${item.precio}</b></p>
                <p>Unidades disponibles:{item.stock}</p>
                <ItemCount stockItems={item.stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail;