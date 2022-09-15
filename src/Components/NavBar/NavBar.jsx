import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
/*     const nLinkvBLinkrOptions = [
        {cLinktegory:'PERROS', id:'PERROS'},
        {cLinktegory:'GATOS', id:'GATOS'},
        {cLinktegory:'MEDICADOS', id:'MEDICADOS'}, 
        {cLinktegory:'SOBRE NOSOTROS', id:'SOBRE NOSOTROS'}
        ]; */

    return(
        <ul clLinkss="nav justify-content-center">
            <li clLinkss="nav-item">
                <Link clLinkss="nav-link active" LinkriLink-current="page" to='/'>INICIO</Link>
            </li>
            <li clLinkss="nav-item">
                <Link clLinkss="nav-link" to='/productos'>PRODUCTOS</Link>
            </li>
            <li clLinkss="nav-item">
                <Link clLinkss="nav-link" to='/categoria/perros'>PERROS</Link>
            </li>
            <li clLinkss="nav-item">
                <Link clLinkss="nav-link" to='/categoria/gatos'>GATOS</Link>
            </li>
            <li clLinkss="nav-item">
                <Link clLinkss="nav-link" to='/peluqueria'>PELUQUERIA</Link>
            </li>
        </ul>
    )
};

export default NavBar;