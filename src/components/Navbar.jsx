import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./cart/CartWidget";

const Navbar = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"}>Venta Gamer</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/category/auriculares"}>Auriculares</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/category/fuentes"}>Fuentes</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/category/gabinetes"}>Gabinetes</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/category/memorias-ram"}>Memorias-Ram</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/category/monitores"}>Monitores</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/category/mouses-mousepads"}>Mouses/Mousepads</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="me-3">
                        <CartWidget />
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;