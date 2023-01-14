import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail=({item})=>{

    return(
        <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
                <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
                <p><b>${item.precio}</b></p>
            </div>
            <ItemCount stockItems={15}/>
        </div>
    )
}

export default ItemDetail;