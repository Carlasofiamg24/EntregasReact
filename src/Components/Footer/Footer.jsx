import React from "react";
import '../Footer/Footer.css'

const Footer =()=>{
    return(
        <div className="container-fluid bgFooter">
            <div className="col">
                <div className="container text-white" style={{fontSize: 13}}>
                    <div className="row p-4 m-3">
                        <div className="col-md-4">
                            <h5>INFO</h5>
                                <li>RAZAS</li>
                                <li>NUTRICION ESPECIFICA</li>
                                <li>PERROS</li>
                                <li>GATOS</li>
                        </div>
                        <div className="col-md-4">
                            <h5>INFORMACION</h5>
                            <li>SOBRE NOSOTROS</li>
                            <li>DONDE ENCONTRARNOS</li>
                            <li>HORARIOS</li>
                        </div>
                        <div className="col-md-4">
                            <h5>CONTACTENOS</h5>
                                <li>TELEFONO</li>
                                <li>MAIL</li>
                                <li>REDES</li>
                                <li>DIRECCION</li>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6" style={{fontSize: 11}}>
                            <p>©2022 Mundo Animal Crovara.Todos los derechos reservados.</p>
                     </div>
                        <div className="col-md-6 text-end">
                        {/* <img src={Facebook} alt="Facebook" width="24" />
                        <img src={Instagram} alt="Instagram" width="24" />
                        <img src={Youtube} alt="Youtube" width="24" />
                        <img src={Twitter} alt="Twitter" width="24" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;