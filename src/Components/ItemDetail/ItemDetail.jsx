import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from "../ItemCount/ItemCount";



const ItemDetail = ({item}) => {

     const [goToCart, setGoToCart] = useState(false);

    const onAdd = (cantidad) => {
        setGoToCart(true);
    }
    
    return(
        <div className="detail" key={item.id}>
            <img src={item.img} alt={item.title} />
            <div className="infoDetail">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
                {

                goToCart ? <Link to={'/cart'}><button type="button" className="btn btn-secondary">Terminar Compra</button></Link> 
                : <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            }
            </div>

        </div>
    )
};

export default ItemDetail;