import React from "react";
import ImgCarrito from '../../Assets/ImgCarrito2.png'

const CartWidget = () => {
    return(
        <div style={{display:'flex', alignItems: 'center'}}>
            <button type="button" className="btn"><img src={ImgCarrito} alt="Imagen carrito" /></button>
            <span className="position-relative top-0 start-200 translate-middle badge rounded-pill text-dark">0</span>
        </div>
    )
};

export default CartWidget;