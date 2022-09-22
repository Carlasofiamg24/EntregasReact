import React, {useState, /* useEffect */} from 'react'
import { Link } from 'react-router-dom';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const sumar = () => {
        count < stock && setCount(count + 1);
    };

    const restar = () => {
        count > initial && setCount(count - 1);
    };

    const agregar = () =>{
        onAdd(count)
    };
    

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
            <button className='btn-counter'  onClick = {agregar}>Agregar al carrito</button>
        </Link> 
    </div> 
    
  )
}

export default ItemCount;