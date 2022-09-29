import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return(
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link active text-dark" NavLinkriNavLink-current="page" to='/'>INICIO</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" to='/productos'>PRODUCTOS</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" to='/categoria/perros'>PERROS</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" to='/categoria/gatos'>GATOS</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" to='/peluqueria'>PELUQUERIA</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={"/cart"}><CartWidget/></NavLink>
            </li>
        </ul>
    )
};

export default NavBar;