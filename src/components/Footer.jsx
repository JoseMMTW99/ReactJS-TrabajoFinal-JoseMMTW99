import React from "react";

const Footer=()=>{
    return(
        <div>
            <hr />
            <div className="d-flex align-items-center justify-content-center">
                <a href="/whatsapp"><img className="p-2" src="../images/0.whatsapp.svg" alt="Whatsapp de Venta Gamer" width={50}/></a>
                <a href="/telegram"><img className="p-2" src="../images/0.telegram.svg" alt="Telegram de Venta Gamer" width={50}/></a>
                <a href="/facebook"><img className="p-2" src="../images/0.facebook.svg" alt="Facebook de Venta Gamer" width={50}/></a>
                <a href="/instragram"><img className="p-2" src="../images/0.instagram.svg" alt="Instagram de Venta Gamer" width={50}/></a>
                <a href="/twitter"><img className="p-2" src="../images/0.twitter.svg" alt="Twitter de Venta Gamer" width={50}/></a>
                <a href="/youtube"><img className="p-2" src="../images/0.youtube.svg" alt="YouTube de Venta Gamer" width={50}/></a>
            </div>
        </div>
    )
}

export default Footer;