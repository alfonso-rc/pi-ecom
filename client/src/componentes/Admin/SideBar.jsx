import { Link } from "react-router-dom"

const SideBar = () =>{
    return(
        <div>
            <ul>
                <li>
                    <Link to="/admin/articulos">Articulos</Link>
                    <Link to="/admin/usuarios">Usuarios</Link>
                    <Link to="/admin/ofertas">Ofertas</Link>
                </li>
            </ul>
        </div>
    )
}
export default SideBar