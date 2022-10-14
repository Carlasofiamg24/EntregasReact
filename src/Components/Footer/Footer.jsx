import React from "react";
import '../Footer/Footer.css'
import instagram from "../../Assets/SM-RRSS-03.png";
import facebook from "../../Assets/SM-RRSS-04.png";

const Footer =()=>{
    return(
        <div className="container-fluid bgFooter">
            <div className="col">
                <div className="container text-white" style={{fontSize: 13}}>
                    <div className="row p-4 m-3">
                        <div className="col-md-12 text-center">
                            <h5>NUESTRAS REDES</h5>
                                <img src={facebook} width="24" alt="facebook" /> 
                                <img src={instagram} width="24" alt="instagram" />  
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-12 text-center" style={{fontSize: 11}}>
                            <p>©2022 Mundo Animal Crovara.Todos los derechos reservados.</p>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;