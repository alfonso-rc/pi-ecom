import { useAuth0 } from '@auth0/auth0-react';
import {BiUserCircle} from "react-icons/bi"

function LoginAuth0() {

    const { loginWithRedirect } = useAuth0();

    return (
        <div >            
            <button
                className="btn btn-outline my-5 text-white "
                onClick={() => loginWithRedirect()}
            >
                <BiUserCircle size={25}/>
                LOG IN
            </button>
        </div>
    );
};

export default LoginAuth0;
