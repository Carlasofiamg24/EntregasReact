import React, {useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { productos } from "../Mock/Productos";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { detalleId } = useParams(); 

    useEffect(()=>{
       const getProducto = () =>
        new Promise ((res,jec)=>{
            const product = productos.find((prod)=> prod.id ===1)
            setTimeout(()=>{
                res(product)
            },500)
        })
        getProducto()
        .then((data)=>{
            setItem(data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [])
    
    return(
            <ItemDetail item={item}/>
    )
};

export default ItemDetailContainer; 

