import imageDefault from '../../imagenes/userImage.png';

function Profile() {
    let user = sessionStorage;
    let image = user.image ? user.image : imageDefault;
    return (
        <div className="m-5">
            <div className="btn btn-outline ">
                <div >
                    <img
                        className="rounded-full mr-3 w-9"
                        src={image} alt="user"
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
