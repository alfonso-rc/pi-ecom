import React from "react";
import SideBar from "../SideBar";
import Logo from "../../../../../client/src/ECOM-10_2.png";

export default function Offer() {
  return (
    <div className="m-0 p-0">
      <img
        className="mx-auto h-32 justify-center w-auto"
        src={Logo}
        alt="Workflow"
      />
      <h1 className="font-sans">Offer Admin</h1>
      <div className="flex">
        <SideBar />
        <div className="content">
          <p>ACA ESTAN LAS OFERTAS</p>
        </div>
      </div>
    </div>
  );
}
