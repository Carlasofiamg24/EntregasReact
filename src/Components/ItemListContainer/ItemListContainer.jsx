import React from "react";
import ItemCount from "../ItemCount/ItemCount";



const ItemListContainer = ( props ) => {
    return(
        <div className="container">
            <p className="d-flex justify-content-center text-danger">{props.greeting}</p>
           <ItemCount stock={5} initial={1} onAdd={0}  />
        </div>
    )
};

export default ItemListContainer;