import React from "react";
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    const navBarOptions = [
        {category:'PERROS', id:'PERROS'},
        {category:'GATOS', id:'GATOS'},
        {category:'MEDICADOS', id:'MEDICADOS'}, 
        {category:'SOBRE NOSOTROS', id:'SOBRE NOSOTROS'}
        ];

    return(
        <div className="pb-5">
            <ul className="nav d-flex justify-content-center ">
	            {
                navBarOptions.map(navBarOption =>
                    <li key={navBarOption.id} className="nav-item">
                        <a className="nav-link link_header text-dark" href="!#">{navBarOption.category}</a>
                    </li>)
                }
                <CartWidget />
            </ul>
            
        </div>
    )
};

export default NavBar;