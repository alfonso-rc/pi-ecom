import { useHistory } from "react-router-dom";

function LogOut() {
    const history = useHistory();

    const closeSession = async () => {
        sessionStorage.clear();
        history.push("/");
    };

    return (
        <li
            className="text-left"
            onClick={() => closeSession()}
        >
           Cerrar sesión
        </li>
    );
};

export default LogOut;
