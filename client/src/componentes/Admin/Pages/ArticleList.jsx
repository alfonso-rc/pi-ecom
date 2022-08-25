import React from 'react';
import Article from "../Article"
import SideBar from '../SideBar';


export default function Admin({id,title,modelo,stock,price}) {
  return(
    <div className='m-0 p-0'>
      <h1>Admin</h1>
      <div className='flex'>
        <SideBar/>
        <div className='overflow-scroll h-56'>
          <Article/>
        </div>
      </div>
    </div>
  )
}
