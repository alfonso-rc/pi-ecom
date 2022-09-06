import React from "react";
import SideBarAdmin from "./SideBarAdmin";

import NavBarAdmin from "../../componentes/NavBarAdmin";
import Footer from "../Footer";

export default function Offer() {
  return (
    <div className="m-0 p-0">
      <NavBarAdmin/>
      <div className="min-h-screen">
        <div className="flex">
          <SideBarAdmin />
          <div className="content">
            <p>ACA ESTAN LAS OFERTAS</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
