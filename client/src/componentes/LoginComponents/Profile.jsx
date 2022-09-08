import {BiCaretDown} from "react-icons/bi";
import {BiLogOut} from "react-icons/bi";
import {BiPackage} from "react-icons/bi";
import {BiWrench} from "react-icons/bi";
import {BiRocket} from "react-icons/bi";
import {BiLike} from "react-icons/bi";

import { Link } from "react-router-dom";
import imageDefault from '../../imagenes/userImage.png';
import LogOut from "./logOut";

function Profile() {
    let user = sessionStorage;
    let imagen = user.image === "null" ? imageDefault : user.image;

    return (
        <div className="m-5">

            <div className="dropdown dropdown-hover dropdown-end">
                <label tabIndex="0" className="btn btn-outline text-white w-auto">
                    <div>
                        <img
                            className="rounded-full mr-3 w-9"
                            src={imagen} alt="user"
                        />
                    </div>
                    <div className="mr-2 hidden lg:block">
                        {`${user.name} ${user.lastName}`}
                    </div>
                    <BiCaretDown size={16}/>
                </label>

                <ul tabIndex="0" className="dropdown-content menu py-4 shadow bg-violet-500 rounded-md w-48 sm:w-60">
                    {
                        sessionStorage.userType === '2' && <li className="hover:bg-violet-800 rounded-none text-white">
                            <Link to={'/admin'}><BiRocket size={20}/>Panel de administrador</Link>
                        </li>
                    }
                   <Link to={"/myShoppings"}> <li className="hover:bg-violet-800 rounded-none text-white"><a><BiPackage size={20}/>Mis compras</a></li></Link>

                   <Link to={'/favoritos'}>
                        <li className="hover:bg-violet-800 rounded-none text-white">
                            <a><BiLike size={20}/>Mis favoritos</a>
                        </li>
                    </Link>

                    <Link to={'/perfil'}>
                        <li className="hover:bg-violet-800 rounded-none text-white">
                            <a><BiWrench size={20}/>Mi perfil</a>
                        </li>
                    </Link>

                    <li className="hover:bg-violet-800 rounded-none text-white"><a><BiLogOut size={20}/><LogOut/></a></li>
                </ul>
            </div>

        </div>
    );
};

export default Profile;
