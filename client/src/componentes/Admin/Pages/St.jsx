import React from "react";
import SideBar from "../SideBar";
import StArticle from "../StArticle";
import Logo from "../../../../../client/src/ECOM-10_2.png";

export default function St() {
  return (
    <div className="m-0 p-0">
      <img
        className="mx-auto h-32 justify-center w-auto"
        src={Logo}
        alt="Workflow"
      />
      <h1 className="font-sans">Users Admin</h1>
      <div className="flex">
        <SideBar />
        <div className="overflow-scroll h-auto  w-4/5 m-8">
          <StArticle />
        </div>
      </div>
    </div>
  );
}
