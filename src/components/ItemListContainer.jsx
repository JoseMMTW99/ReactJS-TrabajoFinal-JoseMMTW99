import { getDocs, collection, getFirestore, query, where } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
//import arrayProductos from "./json/arrayProductos.json";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

/*    useEffect(() => {
        console.log(id);
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 1000);
        })

        promesa.then((data) => {
            console.log(data);
            setItems(data);
        })

    }, [id]);*/

    //INSERTO LOS PRODUCTOS DE MI JSON A FIRESTORE
/*    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = collection (db, "items");
        
        arrayProductos.forEach((item)=>{
            addDoc(itemsCollection, item)
        })
    },[]);*/

    //CONSULTAR LA COLECCION DE MIS PRODUCTOS
    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then((snapShot)=>{
            setItems(snapShot.docs.map((doc)=>({id:doc.id, ...doc.data()})));
        })
    },[id]);

    return (
        <div className="container py-5">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;