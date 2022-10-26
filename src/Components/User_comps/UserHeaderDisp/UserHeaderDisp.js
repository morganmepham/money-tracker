import './UserHeaderDisp.css'
import help_icon from '../../../images/help_icon.png'

const UserHeaderDisp = (props) => {
    const pic = props.user.profilePicture
    const name = props.user.name
    const username = props.user.username
    return (
        <div className="user-header">
            {pic !== null && <img src={pic} alt="profile picture" className="profile-pic" />}
            {pic === null && <img src={help_icon} alt="profile picture" className="profile-pic" />}

            {name === null && <h1 className="userpage-username">{username}</h1>}
            {name !== null && <h1 className="userpage-username">{name}</h1>}
        </div>
    );
}
 
export default UserHeaderDisp;