import { useNavigate } from 'react-router-dom'
import './ContactsInfoHeader.css'

const ContactsInfoHeader = (props) => {

    const contact = props.contact
    const navigate = useNavigate()

    const handleBackButton = () => {
        navigate(-1)
    }

    return (
        <div className="contact-info-header">
            <input type="button" className="contact-info-back-button" value='Back' onClick={handleBackButton}/>
            <p className="contact-info-name">{contact.contact}</p>
            <img src={contact.pictureSrc} alt="Contact" className="contact-info-pp" />
        </div>
    );
}
 
export default ContactsInfoHeader;