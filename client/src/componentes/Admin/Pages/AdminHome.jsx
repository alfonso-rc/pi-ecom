import React from "react";
import SideBar from "../SideBar";
import Logo from "../../../ECOM-10_2.png";
import NavBarAdmin from "../../NavBarAdmin";
import Footer from "../../Footer";

export default function Admin() {
  return (
    <div className="m-0 p-0">
      <NavBarAdmin/>
      <img
        className="mx-auto h-32 justify-center w-auto"
        src={Logo}
        alt="Workflow"
      />
      <div className="flex">
        <SideBar />
        <div className="content"></div>
      </div>
      <Footer/>
    </div>
  );
}