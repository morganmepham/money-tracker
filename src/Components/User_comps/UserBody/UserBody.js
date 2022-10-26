import { useState } from 'react'
import TopContacts from '../TopContacts/TopContacts'
import TopLocations from '../TopLocations/TopLocations'
import UserHeaderDisp from '../UserHeaderDisp/UserHeaderDisp'
import UserSidebar from '../UserSidebar/UserSidebar'
import './UserBody.css'

const UserBody = () => {
    const data = localStorage.getItem('ActiveUser')
    const userData = JSON.parse(data)
    
    const [user, setUser] = useState(userData)

    return (
        <div className="user-body">
            <UserHeaderDisp user={user} />
            <TopLocations />
            <TopContacts />
            <UserSidebar />
        </div>
    );
}
 
export default UserBody;