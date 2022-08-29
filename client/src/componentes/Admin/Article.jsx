import React from "react";
import SideBar from "./SideBar";
import ArticleList from "../Admin/Pages/ArticleList";
import Logo from "../../../../client/src/ECOM-10_2.png";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import NavBarAdmin from "../NavBarAdmin";
import Footer from "../Footer";
>>>>>>> dfdf2c3e8a13e1d7baac991e3629cc0242b92ddb

export default function Article({ id, title, modelo, stock, price }) {

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
<<<<<<< HEAD
      <Link to="/create">
        <button class="btn btn-outline btn-accent">Add Article</button>
      </Link>
=======
      <button
        class="btn btn-outline btn-accent"
        onClick={(e) => handleAddArticle(e)}
      >
        Add Article
      </button>
      <Footer/>
>>>>>>> dfdf2c3e8a13e1d7baac991e3629cc0242b92ddb
    </div>
  );
}
