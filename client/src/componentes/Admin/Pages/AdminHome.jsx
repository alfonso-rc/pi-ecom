import React from 'react';
import SideBar from "../SideBar"

export default function Admin() {
  return (
    <div className='m-0 p-0'>
      <h1>Admin</h1>
      <div className='flex'>
        <SideBar/>
        <div className='content'>
        </div>
      </div>
    </div>
  )
}
