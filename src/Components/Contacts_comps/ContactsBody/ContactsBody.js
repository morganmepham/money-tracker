import { useNavigate } from 'react-router-dom'
import './ContactsBody.css'

const ContactsBody = () => {
    const data = localStorage.getItem('ActiveUser')
    const user = JSON.parse(data)
    const fullContactList = user.fullContactList

    const sorted = fullContactList.sort((a, b) => a.contact.localeCompare(b.contact));
    const navigate = useNavigate()

    const totalCompanies = sorted.filter((contact) => {
        return contact.contactType === 'Company'
    })
    const totalPeople = sorted.filter((contact) => {
        return contact.contactType === 'Person'
    })

    const handleClickContact = (e) => {
        const item = e.target
        let contactName;
        if(item.className === 'contact-list-item-name'){
            contactName = item.innerHTML
        }else if(item.className === 'contact-list-item'){
            contactName = item.querySelector('.contact-list-item-name').innerHTML
        }else if(item.className === 'contact-list-item-pic'){
            const parent = item.parentNode
            contactName = parent.querySelector('.contact-list-item-name').innerHTML
        }
        contactName = contactName.replace(/\s+/g, '-')
        navigate(`/contacts/${contactName}`)
    }

    const handleAddContact = () => {
        navigate('/contacts/add-contact')
    }

    return (
        <div className="contacts-body-div">
            <h2 className="contacts-title">Contacts</h2>
            <div className="contacts-list-div">
                {sorted.map((contact) => {
                    return <div className="contact-list-item" key={contact.contact} onClick={handleClickContact}>
                        <img src={contact.pictureSrc} alt='contact' className="contact-list-item-pic" />
                        <p className="contact-list-item-name">{contact.contact}</p>
                    </div>
                })}
            </div>
            <div className="contacts-side-div">
                <p className="total-contacts-text">{`Total Contacts: ${sorted.length}`}</p>
                <p className="total-people-text">{`Total People: ${totalPeople.length}`}</p>
                <p className="total-companies-text">{`Total Locations: ${totalCompanies.length}`}</p>
                <input type="button" className="contacts-add-button" value='Add a contact' onClick={handleAddContact}/>
            </div>
        </div>
    );
}
 
export default ContactsBody;