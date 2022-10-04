import React from "react";
import Logo from "../../Assets/MundoAnimalNombre.png";

const Success = ({id, direccion}) => {
    return (
        <div className="row">
            <div className="col-md-12 text-center p-5">
                <h5><b>¡Felicitaciones!</b></h5>
                <p><img src={Logo} alt="Mundo animal logo" width="180" /></p>
                <p>La Orden de Compra se generó con el ID: <b>{id}</b>.<br/>
                Entrega en la direccion: <b>{direccion}</b>
                </p>
            </div>
        </div>
    )
}

export default Success;