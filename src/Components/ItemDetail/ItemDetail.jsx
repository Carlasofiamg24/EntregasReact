import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import ItemCount from "../ItemCount/ItemCount";



const ItemDetail = ({item}) => {

    const [goToCart, setGoToCart] = useState(false);

    const {addToCart} = useContext(CartContext);

    const onAdd = (cantidad) => {
        setGoToCart(true);
        addToCart(item, cantidad);
    }

    
    
    return(
        <div className="detail" key={item.id}>
            <img src={item.img} alt={item.title} />
            <div className="infoDetail">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
                {

                goToCart ? <Link to={'/cart'}><button type="button" className="btn-counter">Ir al carrito</button></Link> 
                : <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            }
            </div>

        </div>
    )
};

export default ItemDetail;