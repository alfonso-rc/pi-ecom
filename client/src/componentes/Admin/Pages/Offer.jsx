import React from "react";
import SideBar from "../SideBar";
import Logo from "../../../../../client/src/ECOM-10_2.png";
import NavBarAdmin from "../../NavBarAdmin";
import Footer from "../../Footer";

export default function Offer() {
  return (
    <div className="m-0 p-0">
      <NavBarAdmin/>
      <div className="min-h-screen">
        <h1 className="font-sans">Offer Admin</h1>
        <div className="flex">
          <SideBar />
          <div className="content">
            <p>ACA ESTAN LAS OFERTAS</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
