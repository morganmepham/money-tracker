import { useState } from 'react'
import NavBar from '../Components/Public_comps/NavBar/NavBar'
import UserBody from '../Components/User_comps/UserBody/UserBody'

const User = () => {
    const data = localStorage.getItem('ActiveUser')
    const userData = JSON.parse(data)
    
    const [user, setUser] = useState(userData)

    return (
        <>
            <NavBar />
            <UserBody/>

        </>
    );
}
 
export default User;