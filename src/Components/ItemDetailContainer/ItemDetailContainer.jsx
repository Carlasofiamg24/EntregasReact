import React, { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { productos } from "../Mock/Productos";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

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