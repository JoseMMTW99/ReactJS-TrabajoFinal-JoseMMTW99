import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-drak">
            <div>
                <div className="card border p-3 mb-3">
                    <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                    <div className="card-body text-center">
                        <p className="card-text text-dark">{item.nombre}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item;