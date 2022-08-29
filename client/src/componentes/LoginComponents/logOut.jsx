import { useHistory } from "react-router-dom";

function LogOut() {
    const history = useHistory();

    function onSubmit() {
        sessionStorage.clear();
        history.push("/home");
    };

    return (
        <div>
            <button
                className="btn btn-outline my-5 text-white "
                onClick={onSubmit}
            >
                logout
            </button>
        </div>
    );
};

export default LogOut;
