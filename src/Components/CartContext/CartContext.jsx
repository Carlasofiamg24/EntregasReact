import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider= (props) =>{
    const [cart, setCart] = useState([]);

    const addToCart= (item, cantidad)=>{
    const producto = {...item, cantidad};
    if(isInCart(producto.id)){
        sumarCantidad(producto)
    }else{
        setCart([...cart, producto]);
    }
    
    }
    
    const isInCart=(id)=>{
        return cart.some((prod)=>prod.id === id);
    }

    const sumarCantidad = (producto)=>{
        const cartUpdated = cart.map((productoEnElCarrito)=>{
            if(producto.id === productoEnElCarrito.id){
                const productUpdated = {
                    ...productoEnElCarrito,
                    cantidad: productoEnElCarrito.cantidad + producto.cantidad
                };
                return productUpdated;
            }else{
                return productoEnElCarrito;
            }
        })
        setCart(cartUpdated);
    }

    const deleteAll = ()=>{
        setCart([])
    };
    
    const totalUnidades = () => {
        const copia = [...cart];
        let count = 0;
        copia.forEach((producto) => {
            count = count + producto.cantidad;
        });
        return count;
    };
    const precioTotal = () => {
        const copia = [...cart];
        let count = 0;
        copia.forEach((producto) => {
            count = count + producto.price * producto.cantidad;
        });
        return count;
    };

    const deleteOne = (id) => {
        const productosFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(productosFiltrados);
    };
    

    return(
        <CartContext.Provider value={{cart, addToCart,deleteAll,totalUnidades,deleteOne, precioTotal}}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;