import React from "react";
import Item from "../Item/Item";


const ItemList = ({items = []}) => {

    return(
        <div className="row containerCard">
        {items.map((item)=>{
            return <div className="col-md-4" key={item.id}><Item key={item.id} item={item} info={item}/></div>
        })}
    </div>
    )
};

export default ItemList;