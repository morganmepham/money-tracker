import { useNavigate } from 'react-router-dom';
import './UserSidebar.css'

const UserSidebar = () => {
    const navigate = useNavigate()
    const handleAccountClick =() => {
        navigate('/user/account_info')
    }
    return (
        <div className="user-sidebar">
            <p className="version">Version 1.1</p>
            <p className="account-info" onClick={handleAccountClick}>Account</p>
            <p className="settings">Settings</p>
        </div>
    );
}
 
export default UserSidebar;