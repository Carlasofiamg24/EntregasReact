import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import {productos} from "../Mock/Productos";
import { useParams } from "react-router-dom";



const ItemListContainer = ({texto}) => {
   /*  const [items, setItems] = useState([]);

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
         */


    const [items, setItems] = useState ([])

    const {categoriaId} = useParams();

    useEffect (() => {
        const getProductos = new Promise (resolve =>{
            setTimeout (() => {
                resolve(productos);
            }, 1000);
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
           {/*  <ItemCount stock={5} initial={1} onAdd={0}  /> */}
          {/*  <ItemList data={data} /> */}
        </div>
    )
};

export default ItemListContainer;