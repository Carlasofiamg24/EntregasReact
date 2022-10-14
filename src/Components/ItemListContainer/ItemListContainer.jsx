import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs, where, query} from 'firebase/firestore';
import ItemList from "../ItemList/ItemList";
import Loading from '../Loading/Loading';



const ItemListContainer = () => {
    const [items, setItems] = useState ([])
    const {categoriaId} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        const db = getFirestore();
        const productosCollection = collection(db, 'productos-petshop');
    
        if(categoriaId){
            const productosFiltrado = query(productosCollection, where('category', '==', categoriaId))
            getDocs(productosFiltrado)
            .then(respuesta => setItems(respuesta.docs.map(producto => ({id: producto.id, ...producto.data()}))))
           
            
        }else{
            getDocs(productosCollection)
            .then(respuesta => setItems(respuesta.docs.map(producto => ({id: producto.id, ...producto.data()}))))
                setLoading(false);
        }
    }, [categoriaId])

    return(
        <div className="container" >
            {loading ? <Loading /> : <ItemList items={items}/> }
        </div>
    )
};

export default ItemListContainer;