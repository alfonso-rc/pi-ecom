import React from "react";
import SideBar from "../SideBar";
import Logo from "../../../ECOM-10_2.png";
import NavBarAdmin from "../../NavBarAdmin";
import Footer from "../../Footer";

export default function Admin() {
  return (
    <div className="m-0 p-0">
      <NavBarAdmin/>
      <div className="min-h-screen">
        <div className="flex">
          <SideBar />
          <div className="content"></div>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}