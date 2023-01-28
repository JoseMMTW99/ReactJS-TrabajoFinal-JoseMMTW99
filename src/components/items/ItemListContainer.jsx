import { getDocs, collection, getFirestore, query, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import Promociones from "../venta-gamer/Promociones";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then((snapShot)=>{
            setItems(snapShot.docs.map((doc)=>({id:doc.id, ...doc.data()})));
            setLoading(false);
        })
    },[id]);

    return (
        <div className="container py-5">
            {loading ? <Loading/> : <ItemList items={items} />}
            <Promociones/>
        </div>
    )
}

export default ItemListContainer;