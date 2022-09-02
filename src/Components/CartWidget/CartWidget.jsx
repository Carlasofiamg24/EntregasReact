import React from "react";
import imgCarrito from '../../Assets/carrito.png';

const CartWidget = () => {
    return(
        <div>
            <button type="button" className="btn position relative">
                <a href="!#"><img src={imgCarrito} alt="Imagen carrito" width='35'/></a>
                <span className="position-relative top-0 start-200 translate-middle badge rounded-pill bg-danger">1</span>
            </button>
        </div>
    )
};

export default CartWidget;