import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getUsers,
  deleteUser,
  banUser,
  typeUser,
} from "../../../../src/store/actions/index.js";
import s from "../Pages/articleList2.module.css";

export default function UserList() {
  const allUsers = useSelector((state) => state.users);
  let dispatch = useDispatch();
  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  function handleClickDelete(id) {
    try {
      dispatch(deleteUser(id));
      allUsers = allUsers.filter((a) => a.id !== id);
      refreshPage();
    } catch (error) {
      console.log(error);
    }
  }

  function handleClickTypeUser(id) {
    try {
      dispatch(typeUser(id));
      refreshPage();
    } catch (error) {
      console.log(error);
    }
  }

  function handleClickBaned(id) {
    try {
      dispatch(banUser(id));
      alert("Hecho!");
      refreshPage();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Address</th>
              <th>Mail</th>
              <th>UserName</th>
              {/* <th>Password</th> */}
              <th>Coins</th>
              <th>User Type</th>
              <th>Ban</th>
              <th>Action</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allUsers?.map((usr) => {
              return (
                <tr>
                  <td>{usr.id}</td>
                  <td>{usr.name}</td>
                  <td>{usr.address}</td>
                  <td>{usr.mail}</td>
                  <td>{usr.userName}</td>
                  {/* <td>{usr.password}</td> */}
                  <td>{usr.coins}</td>
                  <td>{usr.userType == 1 ? "Ordinario" : "Admin"}</td>
                  <td>{usr.ban}</td>
                  <th>
                    {!usr.ban ? (
                      <div>
                        <button
                          className="btn btn-success btn-xs"
                          onClick={() => handleClickBaned(usr.id)}
                        >
                          NoBanned
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button
                          className="btn btn-error btn-xs"
                          onClick={() => handleClickBaned(usr.id)}
                        >
                          Banned
                        </button>
                      </div>
                    )}
                  </th>
                  <th>
                    {(usr.userType === "1") ? (
                      <div>
                        <button
                          className="btn btn-success btn-xs"
                          onClick={() => handleClickTypeUser(usr.id)}
                        >
                          Cambiar Tipo
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button
                          className="btn btn-error btn-xs"
                          onClick={() => handleClickTypeUser(usr.id)}
                        >
                          Cambiar Tipo
                        </button>
                      </div>
                    )}
                  </th>
                  <td>
                    <a href="#my-modal-2" className="btn btn-error btn-xs">
                      Delete
                    </a>
                    <div className="modal" id="my-modal-2">
                      <div className="modal-box">
                        <h3 className="font-bold">
                          El Usuario se eliminara de manera permanente!
                        </h3>
                        <div className="modal-action">
                          <button
                            className="btn btn-error btn-xs"
                            onClick={() => handleClickDelete(usr.id)}
                          >
                            Continuar
                          </button>
                          <a href="#" className="btn btn-xs">
                            Cancelar
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
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
              <th>Coins</th>
              <th>User Type</th>
              <th>Ban</th>
              <th>Action</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
