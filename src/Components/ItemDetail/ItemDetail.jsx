import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
    return(
        <div className="detail">
            <img src={item.img} alt={item.title} />
            <div className="infoDetail">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <h3>${item.price}</h3>

            <ItemCount stock={item.stock} initial={1} onAdd={0}/>
            </div>

        </div>
    )
};

export default ItemDetail;