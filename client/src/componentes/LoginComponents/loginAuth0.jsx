import {BiUserCircle} from "react-icons/bi"
import { useHistory } from "react-router-dom";

function LoginAuth0() {
    const history = useHistory();

    function goLogin(e) {
        e.preventDefault();
        history.push("/login");
    };

    return (
        <div >            
            <button
                className="btn btn-outline my-5 text-white my-5"
                onClick={goLogin}
            >
                <BiUserCircle size={30}/>
                <span className="ml-2">LOG IN</span>
            </button>
        </div>
    );
};

export default LoginAuth0;
