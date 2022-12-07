import React from "react";

const Descuentos=()=>{
    return(
        <div className="container">
            <h3 className="d-flex align-items-center justify-content-center">Ofertas de esta semana</h3>
            <div className="row">
                <div className="card col-md-6 col-lg-4 d-flex align-items-center justify-content-center p-3">
                    <img src={"images/0.descuento-1.jpg"} alt={"Monitor Samsung"} width={180}/>
                    <h5>Monitor Samsung 22" T350H FHD IPS 75Hz</h5>
                    <p></p>
                </div>
                <div className="card col-md-6 col-lg-4 d-flex align-items-center justify-content-center p-3">
                    <img src={"images/0.descuento-2.jpg"} alt={"Fuente Asus Tuf"} width={180}/>
                    <h5>Fuente ASUS TUF 550W 80 Plus Bronze 550B</h5>
                </div>
                <div className="card col-md-6 col-lg-4 d-flex align-items-center justify-content-center p-3">
                    <img src={"images/0.descuento-3.jpg"} alt={"Auriculares HyperX"} width={180}/>
                    <h5>Auriculares HyperX Cloud Revolver 7.1</h5>
                </div>
                <div className="card col-md-6 col-lg-4 d-flex align-items-center justify-content-center p-3">
                    <img src={"images/0.descuento-4.jpg"} alt={"Gabinete Kolink"} width={180}/>
                    <h5>Gabinete Kolink Void Black ARGB ATX Vidrio Templado</h5>
                    <p></p>
                </div>
                <div className="card col-md-6 col-lg-4 d-flex align-items-center justify-content-center p-3">
                    <img src={"images/0.descuento-5.jpg"} alt={"Mouse Glorious Model D"} width={180}/>
                    <h5>Mouse Glorious Model D Minus - Matte Black</h5>
                </div>
                <div className="card col-md-6 col-lg-4 d-flex align-items-center justify-content-center p-3">
                    <img src={"images/0.descuento-6.jpg"} alt={"Memoria GeiL DDR4 16GB 3000MHz"} width={180}/>
                    <h5>Memoria GeiL DDR4 16GB 3000MHz Super Luce RGB Black</h5>
                </div>
            </div>
        </div>
    )
}

export default Descuentos;