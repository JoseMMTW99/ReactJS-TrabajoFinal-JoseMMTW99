import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail=({item})=>{
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) =>{
        addItem(item, quantity);
    }
    return(
        <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
                <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
                <p><b>${item.precio}</b></p>
                <p>Stock:{item.stock}</p>
                <ItemCount stockItems={10} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail;