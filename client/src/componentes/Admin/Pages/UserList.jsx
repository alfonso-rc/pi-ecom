import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers } from "../../../../src/store/actions/index.js";

export default function ArticleList({id,name,lastName,address,mail,userName,password,coins,userType}) {
  const allUsers = useSelector((state) => state.users);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    console.log(allUsers);
  }, [dispatch]);

  return (
    <div className="">
      <div class="">
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Mail</th>
              <th>UserName</th>
              <th>Password</th>
              <th>Coins</th>
              <th>User Type</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { allUsers?.map((usr) => {
              return (
                <tr>
                  <td>{usr.id}</td>
                  <td>{usr.name}</td>
                  <td>{usr.lastName}</td>
                  <td>{usr.address}</td>
                  <td>{usr.mail}</td>
                  <td>{usr.password}</td>
                  <td>{usr.coins}</td>
                  <td>{usr.userType}</td>
                  <th>
                    <button className="btn btn-info btn-xs">Edit</button>
                  </th>
                  <th>
                    <button className="btn btn-error btn-xs">Delete</button>
                  </th>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th>id</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Mail</th>
              <th>UserName</th>
              <th>Password</th>
              <th>Coins</th>
              <th>User Type</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
