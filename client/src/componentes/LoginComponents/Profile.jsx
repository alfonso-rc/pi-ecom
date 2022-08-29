import imageDefault from '../../imagenes/userImage.png';

function Profile() {
    let user = sessionStorage;
    return (
        <div className="btn btn-outline my-5 text-white">
            <div >
                <img
                    className="rounded-full mr-3 w-9"
                    src={user.image ? user.image : imageDefault} alt="user"
                />
            </div>
            <div>
                {`${user.name} ${user.lastName}`}
            </div>
        </div>
    );
};

export default Profile;
