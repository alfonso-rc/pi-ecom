import React from 'react';
import SideBar from './SideBar';
import ArticleList from '../Admin/Pages/ArticleList';


export default function Article({id,title,modelo,stock,price}) {

  const handleAddArticle = () => {
    
  };

  return(
    <div className='m-0 p-0'>
      <h1>Articles Admin</h1>
      <div className='flex'>
        <SideBar/>
        <div className='overflow-scroll h-96  w-4/5 m-8'>
          <ArticleList/>
        </div>
      </div>
        <button class="btn btn-outline btn-accent" onClick={(e)=>handleAddArticle(e)}>Add Article</button>;
    </div>
  )
}