import React from "react";

const Item = ({item}) => {
    return(
        <div className="card">
            <img src={item.img} alt="nombre" style={{width:286, height:340}} />
            <div className="infoCard">
                <h2>{item.title}</h2>
                <h4>${item.price}</h4>
                <h5>#{item.category}</h5>

                <button>Ver detalle</button>
            </div>
        </div>
        
    )
};

export default Item;