import React from "react";
import Logo1 from '../../Assets/MundoAnimalNombre.png'

const Loading = () =>{
    return(
        <div className="row">
            <div className="col-md-12 text-center p-5">
                <p><img src={Logo1} alt="Mundo animal logo" width='180' /></p>
                <h3>Cargando...</h3>
            </div>
        </div>
    )
};

export default Loading;