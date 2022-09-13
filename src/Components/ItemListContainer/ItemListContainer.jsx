import React, { useEffect } from "react";
import { useState } from "react";
/* import ItemCount from "../ItemCount/ItemCount"; */
import ItemList from "../ItemList/ItemList";
import {productos} from "../Mock/Productos"



const ItemListContainer = ( props ) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getProductos = () => 
            new Promise ((res,rej) => {
                setTimeout(()=>{
                    res(productos)
                },500)
            });

        getProductos()
        .then((data)=> {
            setItems(data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
        
        
        /* .then(
            (respuesta) => {
            setItems(respuesta);
        });
    }, []); */

    return(
        <div>
            <ItemList items={items} />
           {/*  <ItemCount stock={5} initial={1} onAdd={0}  /> */}
        </div>
    )
};

export default ItemListContainer;