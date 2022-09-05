import React from "react";
import SideBar from "../Admin/SideBar";
import NavBarAdmin from "../Admin/SideBar";
import Footer from "../Footer";

export default function Offer() {
  return (
    <div className="m-0 p-0">
      <NavBarAdmin/>
      <div className="min-h-screen">
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
