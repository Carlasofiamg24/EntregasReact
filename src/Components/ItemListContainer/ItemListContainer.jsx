import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import {productos} from "../Mock/Productos";
import { useParams } from "react-router-dom";



const ItemListContainer = ({texto}) => {
    const [items, setItems] = useState ([])

    const {categoriaId} = useParams();

    useEffect (() => {
        const getProductos = new Promise (resolve =>{
            setTimeout (() => {
                resolve(productos);
            }, 500);
        });
        if(categoriaId) {
            getProductos.then(res => setItems(res.filter(productos => productos.category === categoriaId)));
        } else{
            getProductos.then(res => setItems(res));
        }
    
    }, [categoriaId])
   
        
   

    return(
        <div className="container" >
            <ItemList items={items} />
        </div>
    )
};

export default ItemListContainer;