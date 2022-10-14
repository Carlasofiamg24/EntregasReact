import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import "../ItemCart/ItemCart.css"

const ItemCart = ({producto}) =>{
    const {deleteOne} = useContext(CartContext);

    return(
        <div className="itemCart" >
            <img className="carta" src={producto.img} alt={producto.title} />
            <div className="carta">
                <h3>{producto.title}</h3>
                <p>Cantidad: {producto.cantidad}<br/>Precio por unidad: ${producto.price}<br/>Subtotal : $ {producto.price * producto.cantidad}</p>
                <button className="btn-counter" onClick={()=>deleteOne(producto.id)}>Eliminar</button><br/>
            </div>
        </div>
    )
};

export default ItemCart;