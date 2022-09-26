import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext'
import ItemCart from '../ItemCart/ItemCart';

const Cart = () =>{
    const { cart, deleteAll, precioTotal } = useContext(CartContext);

    if(cart.length === 0){
        return(
            <div className='text-center'>
                <p>No hay elementos en el carrito</p>
                <Link to='/productos' className='btn-counter'>Hacer compras</Link>
            </div>
        )
    };

    return(
        <>
        {
            cart.map(producto => <ItemCart key={producto.id} producto={producto} />)
        } 
        <div className='text-center'>
            <br/><p><b>Total: ${precioTotal()}</b></p>
        </div>
        <div className='d-flex justify-content-center p-1'>
            <Link to='/productos' className='btn-counter'>Seguir comprando</Link>
            <button  className='btn-counter' onClick={deleteAll}>Vaciar Carrito</button>
        </div>
        </>
    )
};

export default Cart;