import React, { useState } from 'react';

const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial);

    const sumar = () => {
        count < stock && setCount(count + 1);
    };

    const restar = () => {
        count > initial && setCount(count - 1);
    };

    const agregarCarrito = () => {
        count <= stock && setCount (count <= stock)
        alert(`Se agregaron al carrito ${count} productos`);
    }
    return (
        <div className="container-counter">
            <div className="container-btn">
                <button className="btn-counter" onClick={restar}>
                    -
                </button>
                <p style={{ fontSize: '24px' }}>{count} </p>
                <button className="btn-counter" onClick={sumar}>
                    +
                </button>
            </div>
            <button className="btn-counter" onClick={agregarCarrito}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;