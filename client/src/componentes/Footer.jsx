import React from 'react';
import Log2 from "../imagenes/logo-ecom.png";
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <div >
            <footer className="footer bg-base-200 text-base-content flex flex-row flex-wrap items-center justify-around py-4">
                <div>
                    <img style={ { alignSelf: "center", marginLeft: "5px" } } src={ Log2 } alt="Logo" className="w-46 h-16" />
                    <p><br />Copyright © 1999-2023 ECOM S.A.</p>
                </div>
                <div>
                    <span className="footer-title link link-hover">Politica de privacidad</span>
                </div>
                <div>
                    <span className="footer-title link link-hover">Terminos y condiciones</span>
                </div>
                <div>
                <Link to="/AboutUs">
                    <span className="footer-title link link-hover">Acerca de nosotros</span>
                </Link>
                </div>
            </footer>
        </div>
    )
}