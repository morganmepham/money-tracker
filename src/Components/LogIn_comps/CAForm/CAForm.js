import './CAForm.css'

import { useState } from "react";
import GreenButton from "../../Public_comps/GreenButton/GreenButton";
import { useNavigate } from 'react-router-dom';

const CAForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [usernameIsValid, setUsernameIsValid] = useState(true)
    const [passwordIsValid, setPasswordIsValid] = useState(true)
    const [confirmPasswordIsValid, setConfirmPasswordIsValid] = useState(true)
    const [userInputColor, setUserInputColor] = useState({border: '0.2rem solid #34C885'})
    const [passInputColor, setPassInputColor] = useState({border: '0.2rem solid #34C885'})

    const navigate = useNavigate()

    class NewUser{
        constructor(username, password ){
            this.username = username
            this.password = password
            this.profilePicture = null
            this.name = null
            this.fullContactList = []
            this.transactions = []
            this.totalSpent = 0
            this.budget = 5000
            this.budgetFrom = new Date()
            this.budgetTo = null
            this.currency = '£'

        }
    }

    const handleCA = () => {
        if(typeof username ===  'string' && username.length >= 5 && password === confirmPassword && password.length >= 5){
            const data = localStorage.getItem('moneyTracker')
            let parsedData = JSON.parse(data)
            
            const newUser = new NewUser(username, password)
            parsedData.users.push(newUser)
            const returnData = JSON.stringify(parsedData)
            localStorage.setItem('moneyTracker', returnData)

            if(parsedData.users){
                parsedData= parsedData.users
            }
            for(let i = 0; i < parsedData.length; i++){
                if(username === parsedData[i].username && password === parsedData[i].password){
                    const activeUser = JSON.stringify(parsedData[i])
                    localStorage.setItem('ActiveUser', activeUser)
                    break;
                }
            }
            navigate('/user/account_info')
        }else{
            if(username.length < 5){
                setUsernameIsValid(false)
                setUserInputColor({border: '0.2rem solid red'})
            }else if(password.length < 5){
                setPasswordIsValid(false)
                setPassInputColor({border: '0.2rem solid red'})
            }else if(password !== confirmPassword){
                setPassInputColor({border: '0.2rem solid red'})
                setConfirmPasswordIsValid(false)
            }
        }
    }

    return (
        <div className="login-body">
            <form className="login-form">
                <h2 className="login-form-title">Create Account</h2>

                <input type="text" className="username-input username-input-no" value={username} onChange={ (e) => {
                    setUsername(e.target.value)
                    setUsernameIsValid(true)
                    setUserInputColor({border: '0.2rem solid #34C885'})
                    }} placeholder='Username...' style={userInputColor}/>
                {!usernameIsValid && <p className="username-error-msg">User name must be 5 characters or more</p>}

                <input type="text" className="password-input" value={password} onChange={ (e) => {
                    setPassword(e.target.value)
                    setPasswordIsValid(true)
                    setPassInputColor({border: '0.2rem solid #34C885'})
                    setConfirmPasswordIsValid(true)
                    }} placeholder='Password...' style={passInputColor}/>

                <input type="text" className="confirm-password-input" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password...' style={passInputColor}/>
                {!passwordIsValid && <p className="password-error-msg">Password must be 5 characters or more</p>}
                {!confirmPasswordIsValid && <p className="confirmPassword-error-msg">Passwords don't match</p>}
                {/* <GreenButton text='Create Account' func={handleCA}/> */}
                <input type="button" className="create-account-button" value = 'Create account' onClick={handleCA}/>
            </form>
        </div>
    );
}
 
export default CAForm;