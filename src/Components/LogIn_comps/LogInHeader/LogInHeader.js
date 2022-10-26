import logo from '../../../images/logo.png'
import './LogInHeader.css'

const LogInHeader = () => {
    return (
        <div className="login-header">
            <img src={logo} alt="logo" className="login-logo" />
            <h1 className="login-header-title">Money Tracker</h1>
        </div>
    );
}
 
export default LogInHeader;