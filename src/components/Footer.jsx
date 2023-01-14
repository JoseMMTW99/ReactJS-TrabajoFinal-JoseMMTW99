import React from "react";
import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <div>
            <hr />
            <div className="d-flex align-items-center justify-content-center">
                <Link to={"./redessociales"} href="/whatsapp"><img className="p-2" src="../images/0.whatsapp.svg" alt="Whatsapp de Venta Gamer" width={50}/></Link>
                <Link to={"./redessociales"} href="/telegram"><img className="p-2" src="../images/0.telegram.svg" alt="Telegram de Venta Gamer" width={50}/></Link>
                <Link to={"./redessociales"} href="/facebook"><img className="p-2" src="../images/0.facebook.svg" alt="Facebook de Venta Gamer" width={50}/></Link>
                <Link to={"./redessociales"} href="/instragram"><img className="p-2" src="../images/0.instagram.svg" alt="Instagram de Venta Gamer" width={50}/></Link>
                <Link to={"./redessociales"} href="/twitter"><img className="p-2" src="../images/0.twitter.svg" alt="Twitter de Venta Gamer" width={50}/></Link>
                <Link to={"./redessociales"} href="/youtube"><img className="p-2" src="../images/0.youtube.svg" alt="YouTube de Venta Gamer" width={50}/></Link>
            </div>
        </div>
    )
}

export default Footer;