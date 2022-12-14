import React from "react";

const Images= ({item}) => {
    return(
        <div className="card" style={{maxWidth: 900}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={item.imagen} className="img-fluid rounded-start" alt={item.titulo} />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.titulo}</h5>
                        <p className="card-text">{item.descripcion}</p>
                    </div>
                    </div>
                </div>
        </div>  
    )
};

export default Images;