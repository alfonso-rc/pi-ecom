import {BiUserCircle} from "react-icons/bi"
import { useHistory } from "react-router-dom";

function LoginAuth0() {
    const history = useHistory();

    function goLogin(e) {
        e.preventDefault();
        history.push("/login");
    };

    return (
        <div className="m-5">            
            <button
                className="btn btn-outline text-white"
                onClick={goLogin}
            >
                <BiUserCircle size={30}/>
                <span className="ml-2 hidden sm:block">INICIAR SESIÓN</span>
            </button>
        </div>
    );
};

export default LoginAuth0;
