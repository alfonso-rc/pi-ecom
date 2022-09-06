import { Link } from "react-router-dom";

const SideBarAdmin = () =>{
    return(
        <div className="flex flex-col h-screen w-44 text-black bg-white pt-10 text-lg">
                <Link to="/admin/articulos"><button className="border-b-2 border-violet-600 m-4 flex justify-start transition delay-100 hover:scale-110">Articulos</button></Link>
                <Link to="/admin/usuarios"><button className="border-b-2 border-violet-600 m-4 flex justify-start transition delay-100 hover:scale-110">Usuarios</button></Link>
                <Link to="/admin/ofertas"><button className="border-b-2 border-violet-600 m-4 flex justify-start transition delay-100 hover:scale-110">Ofertas</button></Link>
                <Link to="/admin/St"><button className="border-b-2 border-violet-600 m-4 flex justify-start transition delay-100 hover:scale-110">Statistics</button></Link>
        </div>
    )
}
export default SideBarAdmin