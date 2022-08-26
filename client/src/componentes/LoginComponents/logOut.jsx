import { useAuth0 } from '@auth0/auth0-react';

function LogOut() {

    const { logout } = useAuth0();

    return (
        <div>
            <button
                className="btn btn-outline my-5 text-white "
                onClick={() => logout()}
            >
                logout
            </button>
        </div>
    );
};

export default LogOut;
