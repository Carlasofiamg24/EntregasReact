import React from "react";
import { Link } from "react-router-dom";
import logo from '../../Assets/MundoAnimalNombre.png';
import '../Header/Header.css'


const Header = () => {

    return(
        <div className="container-fluid">
            <div className="row d-flex justify-content-center mt-3">
                <div className="col-md-3 offset-md-5">
                    <li className="nav-item">
                        <Link className="nav-link active image-fluid" aria-current="page" to='/'><img src={logo} width="88" alt="Logo Royal" /></Link>
                    </li>
                </div>
                <div className="col-md-4">
                        <div className="container-fluid">
                            <form className="d-flex" id='form'>
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btnBuscar" type="submit" id='searchInput'>Search</button>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )
};

export default Header;