import React from 'react';
import Log2 from "../imagenes/logo-ecom.png";

export default function Footer() {
    return(
        <div>
            <footer class="footer p-10 bg-base-200 text-base-content">
                <div>
                <img style={ { alignSelf: "center", marginLeft: "5px" } } src={ Log2 } alt="Logo" className="w-46 h-16" />
                    <p><br/>Copyright © 1999-2023 ECOM S.A.</p>
                </div> 
                <div>
                    <span class="footer-title link link-hover pt-10">Politica de privacidad</span> 
                </div> 
                <div>
                    <span class="footer-title link link-hover pt-10">Terminos y condiciones</span> 
                </div>
                <div>
                    <span class="footer-title link link-hover pt-10">Acerca de nosotros</span> 
                </div> 
            </footer>
        </div>
    )
}