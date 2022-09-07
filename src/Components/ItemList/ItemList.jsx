import React from "react";
import Item from "../Item/Item";


const ItemList = ({items}) => {
    return(
        <div className="row">
            {items.map(item => (
            <div key={item.id} className="col-md-4 py-1">
            <Item nombre={item.nombre} image={item.image} precio={item.precio} descripcion={item.descripcion}/>
            </div>)
            )}
        </div>
    )
};

export default ItemList;