import axios from 'axios';
import { useHistory } from "react-router-dom";

function LogOut() {
    const history = useHistory();

    const closeSession = async () => {
        sessionStorage.clear();
        let response = (await axios.get("http://localhost:3001/del/googleUser")).data;
        history.push("/home");
    };

    return (
        <div>
            <button
                className="btn btn-outline my-5 text-white "
                onClick={() => closeSession()}
            >
                logout
            </button>
        </div>
    );
};

export default LogOut;
