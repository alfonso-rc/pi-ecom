import imageDefault from '../../imagenes/userImage.png';

function Profile() {
    let user = sessionStorage;
    return (
        <div className="m-5">
            <div className="btn btn-outline ">
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
        </div>
    );
};

export default Profile;
