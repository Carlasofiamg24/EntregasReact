import React from "react";

const Contacto = () => {
    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6">
                    <img src="https://cdn.royalcanin-weshare-online.io/GCI9H2YBaxEApS7LgwZc/v1/bd4h-dachshund-adult-in-black-and-white?w=960&h=540&auto=compress&fm=jpg..." className="img-fluid" alt="img-contacto" width={500}/>
                </div>
                <div className="col-md-6 colorContacto">
                    <h1>CONTACTANOS</h1>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-6 imgContacto">
                    <img src="https://cdn.royalcanin-weshare-online.io/2WnEr2YBG95Xk-RBat25/v1/german-shepherd-maine-coon-b-w-brand-emblematic-faqs?w=320&" className="img-fluid " alt="img-contacto2" width={200}/>
                </div>
                <div className="col-md-6">
                    <h3 className="colorContacto">Obtené las respuestas que necesitás</h3>
                    <p>Te responderemos a las preguntas más comunes sobre la salud de las mascotas, sobre nuestros productos y servicios.</p>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="list-group mt-3">
                        <button type="button" className="list-group-item bgRed text-white" aria-current="true">
                            Se puede contactar con nosotros:
                        </button>
                        <button type="button" className="list-group-item list-group-item-action">Por celular, llamada o Whatsapp<br/>11-7614-8284</button>
                        <button type="button" className="list-group-item list-group-item-action">Instragram <br/>@mundoanimal.crovara</button>
                        <button type="button" className="list-group-item list-group-item-action">Email<br/>mundoanimalcrovara@gmail.com</button>
                        <button type="button" className="list-group-item list-group-item-action">Horario de Atencion: <br/>
                        Lunes a Sabados de 09 a 20hs</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contacto;