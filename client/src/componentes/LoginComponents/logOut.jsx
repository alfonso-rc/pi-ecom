import { useDispatch } from "react-redux";
import { logOutUser } from "../../store/actions";

function LogOut() {
    const user = {};
    const dispatch = useDispatch();

    function onSubmit(e) {
        e.preventDefault();
        dispatch(logOutUser(user));
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
