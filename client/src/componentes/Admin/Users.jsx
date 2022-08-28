import React from 'react';
import SideBar from './SideBar';
import UserList from '../Admin/Pages/UserList';


export default function Users({id,name,lastName,address,mail,userName,password,coins,userType}) {
  return(
    <div className='m-0 p-0'>
      <h1>Users Admin</h1>
      <div className='flex'>
        <SideBar/>
        <div className='overflow-scroll h-auto  w-4/5 m-8'>
          <UserList/>
        </div>
      </div>
    </div>
  )
}