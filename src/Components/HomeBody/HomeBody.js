import './HomeBody.css'
import logo from '../../images/logo.png'
import { useNavigate } from 'react-router-dom';

const HomeBody = () => {
    const navigate = useNavigate()

    const handleLogIn = () => {
        navigate('/login')
    }
    const handleCA = () => {
        navigate('/create_account')
    }
    return (
        <div className="home-body-div">
            <div className="home-header">
                <img src={logo} alt="Logo" className="home-header-logo" />
                <h1 className="home-header-title">Money Tracker</h1>
            </div>

            <div className="home-main-div">
                <p className="home-main-text">Track your every financial move</p>
                <input type="button" className="home-login" value='Log in' onClick={handleLogIn}/>
                <input type="button" className="home-ca" value='Create account' onClick={handleCA}/>
            </div>
        </div>
    );
}
 
export default HomeBody;