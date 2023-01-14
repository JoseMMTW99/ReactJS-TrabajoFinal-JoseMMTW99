import React, { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer=()=>{
    const [item,setItem]=useState({});
    const {id}=useParams();

    useEffect(() => {
        const db = getFirestore();
        const documento = doc(db, "items", id)
        getDoc(documento).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({ id: snapShot.id, ...snapShot.data() });
                console.log(snapShot.data());
            } else {
                console.log("No se encontro el documento");
            }
        });
    }, []);

    return(
        <div className="container">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;