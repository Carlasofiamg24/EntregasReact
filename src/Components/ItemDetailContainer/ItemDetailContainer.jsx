import React, {useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loading from '../Loading/Loading';
import { getDoc, getFirestore, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState ({});
    const { detalleId } = useParams(); 
    const [loading, setLoading] = useState(true);

        useEffect(() => {
            const db = getFirestore();
            const queryDoc = doc(db, 'productos-petshop',detalleId);
            getDoc(queryDoc)
            .then(res => setItem({id:res.id, ...res.data()}))
            setTimeout (() => {
                setLoading(false);
            }, 300)
        }, [detalleId])

    return (
        <div>  
         {loading ? <Loading /> : <ItemDetail item={item}/>}
        </div>
    )
};

export default ItemDetailContainer; 