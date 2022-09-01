import {BiCaretDown} from "react-icons/bi";
import {BiLogOut} from "react-icons/bi";
import {BiDollarCircle} from "react-icons/bi";
import {BiPackage} from "react-icons/bi";
import {BiWrench} from "react-icons/bi";
import {BiRocket} from "react-icons/bi";

import { Link } from "react-router-dom";
import imageDefault from '../../imagenes/userImage.png';
import LogOut from "./logOut";

function Profile() {
    let user = sessionStorage;
    let image = !!user.image ? user.image : imageDefault;
    return (
        <div className="m-5">

            <div class="dropdown dropdown-hover dropdown-end">
                <label tabindex="0" class="btn btn-outline text-white">
                    <div >
                        <img
                            className="rounded-full mr-3 w-9"
                            src={image} alt="user"
                        />
                    </div>
                    <div className="mr-2">
                        {`${user.name} ${user.lastName}`}
                    </div>
                    <BiCaretDown size={16}/>
                </label>

                <ul tabindex="0" class="dropdown-content menu py-4 shadow bg-violet-500 rounded-md w-60">
                    {
                        sessionStorage.userType === '1' && <li class="hover:bg-violet-800 rounded-none text-white">
                            <Link to={'/admin'}><BiRocket size={20}/>Panel de administrador</Link>
                        </li>
                    }
                    <li class="hover:bg-violet-800 rounded-none text-white"><a><BiPackage size={20}/>Mis pedidos</a></li>
                    <li class="hover:bg-violet-800 rounded-none text-white"><a><BiDollarCircle size={20}/>Mis coins</a></li>
                    <li class="hover:bg-violet-800 rounded-none text-white"><a><BiWrench size={20}/>Opciones de cuenta</a></li>
                    <li class="hover:bg-violet-800 rounded-none text-white"><a><BiLogOut size={20}/><LogOut/></a></li>
                </ul>
            </div>

        </div>
    );
};

export default Profile;
