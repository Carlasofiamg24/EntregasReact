import React from "react";

const Item = ({nombre, image, precio, descripcion}) => {
    return(
        <div className="card" style={{width:"18rem"}}>
            <img src={image} className="card-img-top img-fluid" alt={nombre} style={{width:286, height:340}} />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{descripcion}. <br/><b>Precio: ${precio}</b></p>
                <a href="!#" className="btn btn-danger">Comprar</a>
            </div>
      </div>
    )
};

export default Item;