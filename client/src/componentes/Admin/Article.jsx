import React from "react";
import SideBar from "./SideBar";
import ArticleList from "../Admin/Pages/ArticleList";
import Logo from "../../../../client/src/ECOM-10_2.png";
import NavBarAdmin from "../NavBarAdmin";
import Footer from "../Footer";

export default function Article({ id, title, modelo, stock, price }) {
  const handleAddArticle = () => {};

  return (
    <div className="m-0 p-0">
      <NavBarAdmin/>
      <img
        className="mx-auto h-32 justify-center w-auto"
        src={Logo}
        alt="Workflow"
      />
      <h1 className="font-sans">Articles Admin</h1>
      <div className="flex">
        <SideBar />
        <div className="overflow-scroll h-96  w-4/5 m-8">
          <ArticleList />
        </div>
      </div>
      <button
        class="btn btn-outline btn-accent"
        onClick={(e) => handleAddArticle(e)}
      >
        Add Article
      </button>
      <Footer/>
    </div>
  );
}
