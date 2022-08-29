import { Link } from "react-router-dom";

const SideBar = () =>{
    return(
        <div className="flex flex-col h-96 justify-center">
                <Link to="/admin/articulos"><button class="btn btn-outline btn-accent m-4">Articulos</button></Link>
                <Link to="/admin/usuarios"><button class="btn btn-outline btn-accent m-4">Usuarios</button></Link>
                <Link to="/admin/ofertas"><button class="btn btn-outline btn-accent m-4">Ofertas</button></Link>
                <Link to="/admin/St"><button class="btn btn-outline btn-accent m-4">Statistics</button></Link>
        </div>
    )
}
export default SideBar