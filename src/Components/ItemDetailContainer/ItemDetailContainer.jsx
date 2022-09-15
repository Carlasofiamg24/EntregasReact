import React, {useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { productos } from "../Mock/Productos";

const ItemDetailContainer = () => {
    const [item, setItem] = useState ({});
    const { detalleId } = useParams(); 

        useEffect(() => {
            const getProducto = new Promise (resolve => {
                setTimeout (() => {
                    resolve(productos);
                }, 500);
            });
            getProducto.then(res => setItem(res.find(producto => producto.id === parseInt(detalleId))));
        }, [detalleId])

    return (
        <ItemDetail item={item} />
    )
};

export default ItemDetailContainer; 