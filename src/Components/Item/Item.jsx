import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return(
        <div className="card" key={item.id}>
            <img src={item.img} alt="nombre" style={{width:216, height:280}} />
            <div className="infoCard">
                <h2>{item.title}</h2>
                <h4>${item.price}</h4>
                <h5>#{item.category}</h5>

               <div><Link to={`/detalle/${item.id}`} className='btn-counter'>Ver detalle</Link></div> 
            </div>
        </div>
        
    )
};

export default Item;