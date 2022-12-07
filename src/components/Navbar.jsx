import React from "react";
import CartWidget from "./CartWidget";

const  Navbar = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/home">Venta Gamer</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/home">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/productos">Productos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/quienes-somos">Quienes Somos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/ayuda">Ayuda</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pe-2">
                    <CartWidget/>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;