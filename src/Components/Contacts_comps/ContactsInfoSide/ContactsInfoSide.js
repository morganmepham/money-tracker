import { useNavigate } from 'react-router-dom'
import './ContactsInfoSide.css'

const ContactsInfoSide = (props) => {
    const data = localStorage.getItem('ActiveUser')
    const user = JSON.parse(data)
    const contact = props.contact

    const contactList = user.fullContactList

    const navigate = useNavigate()

    const handleRemove = () => {
        for(let i = 0; i < contactList.length; i++){
            if(contact.contact === contactList[i].contact){
                const index = user.fullContactList.indexOf(contactList[i])
                user.fullContactList.splice(index, 1)

                const returnUser = JSON.stringify(user)
                localStorage.setItem('ActiveUser', returnUser)
        
                const trackerData = localStorage.getItem('moneyTracker')
                let parsedTrackerData = JSON.parse(trackerData)
                if(parsedTrackerData.users){
                    parsedTrackerData = parsedTrackerData.users
                }
                for(let i = 0; i < parsedTrackerData.length; i++){
                    if(user.username === parsedTrackerData[i].username){
                        parsedTrackerData[i] = user
                    }
                }
        
                const returnTrackerData = JSON.stringify(parsedTrackerData)
                localStorage.setItem('moneyTracker', returnTrackerData)
                break;
            }
        }
        navigate(-1)
    }

    return (
        <div className="contacts-info-sidebar">
            <p className="contacts-info-total">{`Total Spent: ${user.currency}${contact.total}`}</p>
            <p className="contacts-info-trans-count">{`Transaction Count: ${contact.transactions.length}`}</p>
            <p className="contact-info-contact-type">{`Contact Type: ${contact.contactType}`}</p>

            <input type="button" className="remove-contact-button" value='Remove Contact' onClick={handleRemove}/>   
        </div>
    );
}
 
export default ContactsInfoSide;