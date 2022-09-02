import React from "react";
import logo from '../../Assets/Royal-Canin-Logo.svg.png';
import NavBar from '../NavBar/NavBar';
import '../Header/Header.css'

const Header = () => {
    return(
        <div className="container">
            <div className="row d-flex justify-content-center mt-3">
                <div className="col-md-9">
                    <li className="nav-item">
                        <a className="nav-link active image-fluid" aria-current="page" href="#"><img src={logo} width="88" alt="Logo Royal" /></a>
                    </li>
                </div>
                <div className="col-md-3">
                    <nav className="navbar navbar-light">
                        <div className="container-fluid">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <hr />
                    <NavBar />
                </div> 
            </div>
        </div>
    )
};

export default Header;