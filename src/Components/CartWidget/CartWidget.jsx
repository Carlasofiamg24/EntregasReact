import React from "react";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ImgCarrito from '../../Assets/ImgCarrito2.png'
import { CartContext } from '../CartContext/CartContext';

const CartWidget = () => {
    const { totalUnidades } = useContext(CartContext);
    const unidades = totalUnidades();

    return(
        <div style={{display:'flex', alignItems: 'center'}}>
            <Link to="/cart">
                <button type="button" className="btn"><img src={ImgCarrito} alt="Imagen carrito" /></button>
                <span className="position-relative top-0 start-200 translate-middle badge rounded-pill text-dark">{unidades}</span>
            </Link>
        </div>
    )
};

export default CartWidget;