import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GreenButton from "../../Public_comps/GreenButton/GreenButton";
import './LogInForm.css'


const LogInForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [incorrectLogIn, setIncorrectLogIn] = useState(false)
    const [inputColor, setInputColor] = useState({border: '0.2rem solid #34C885'})

    const navigate = useNavigate()
    const handleLogIn = () => {
        const data = localStorage.getItem('moneyTracker')
        let users = JSON.parse(data)
        if(users.users){
            users= users.users
        }
        for(let i = 0; i < users.length; i++){
            if(username === users[i].username && password === users[i].password){
                const activeUser = JSON.stringify(users[i])
                localStorage.setItem('ActiveUser', activeUser)
                navigate('/user')
                break;
            }else{
                setUsername('')
                setPassword('')
                setIncorrectLogIn(true)
                setInputColor({border: '0.2rem solid red'})
            }
        }

}
    return (
        <div className="login-body">
            <form className="login-form">
                <h2 className="login-form-title">Log-in</h2>
                <input type="text" className="username-input" value={username} onChange={ (e) => setUsername(e.target.value)} placeholder='Username...' style={inputColor}/>
                <input type="text" className="password-input" value={password} onChange={ (e) => setPassword(e.target.value)} placeholder='Password...'  style={inputColor}/>
                <input type="button" className="login-button" value='Log in' onClick={handleLogIn}/>
                {incorrectLogIn && <p className="incorrect-login-msg">Incorrect Log-in details</p> }
                <div className="no_account-div">
                    <p className="no_account-q">No Account? Create an account here</p>
                    <Link to='/create_account' className="CA-link"><span className="no_account-btn">Create Account</span></Link>
                </div>
            </form>
        </div>
    );
}

export default LogInForm;