import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const sumar = () => {
        count < stock && setCount(count + 1);
    };

    const restar = () => {
        count > initial && setCount(count - 1);
    };

    useEffect(() => {
        setCount(initial);
    }, [initial])

    return (
    <div className='container-counter'>
        <div className='container-btn'>
            <button className='btn-counter'  onClick={restar}>
                -
            </button>
            <p style={{ fontSize: '24px' }}>{count} </p>
            <button className='btn-counter'  onClick={sumar}>
                +
            </button>           
        </div>

        <Link>
            <button className='btn-counter' disabled={stock <= 0} onClick = {() => onAdd(count)}>Agregar al carrito</button>
        </Link> 
    </div> 
    
  )
}

export default ItemCount;