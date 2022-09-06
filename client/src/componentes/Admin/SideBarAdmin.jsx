import { Link } from "react-router-dom";

const SideBarAdmin = () =>{
    return(
        <div className="flex flex-col h-screen w-44 text-stone-800">
                <Link to="/admin/articulos"><button className="border-b-2 border-violet-600 m-4 flex justify-start hover:scale-105">Articulos</button></Link>
                <Link to="/admin/usuarios"><button className="border-b-2 border-violet-600 m-4 flex justify-start hover:scale-105">Usuarios</button></Link>
                <Link to="/admin/ofertas"><button className="border-b-2 border-violet-600 m-4 flex justify-start hover:scale-105">Ofertas</button></Link>
                <Link to="/admin/St"><button className="border-b-2 border-violet-600 m-4 flex justify-start hover:scale-105">Statistics</button></Link>
        </div>
    )
}
export default SideBarAdmin