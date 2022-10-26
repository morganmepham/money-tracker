import ContactsInfoHeader from '../ContactsInfoHeader/ContactsInfoHeader';
import ContactsInfoSide from '../ContactsInfoSide/ContactsInfoSide';
import './ContactsInfoBody.css'

const ContactsInfoBody = () => {
    const data = localStorage.getItem('ActiveUser')
    const user = JSON.parse(data)
    const fullContactList = user.fullContactList

    const path = window.location.pathname
    let pathContact = path.substring(10)
    pathContact = pathContact.replace('-', ' ')

    let contact;
    let transactions
    for(let i = 0; i < fullContactList.length; i++){
        if(pathContact === fullContactList[i].contact){
            contact = fullContactList[i]
            transactions = contact.transactions
        }
    }

    const sorted = transactions.sort(function(a,b){
        let keyA = a.dateCode
        let keyB = b.dateCode
        return keyB - keyA
    })

    return (
        <div className="contacts-info-body">
            <ContactsInfoHeader contact={contact}/>
            <h2 className="contacts-info-trans-title">Transactions</h2>
            <div className="contacts-info-trans-div">
                {sorted.map((transaction) => {
                    return <div className="contact-info-trans-item" key={transaction.dateCode}>
                        <p className="contact-trans-item-amount">{`${user.currency}${transaction.amount}`}</p>
                        <p className="contact-trans-item-name">{transaction.dateStamp}</p>
                    </div>
                })}
            </div>
            <ContactsInfoSide contact={contact}/>
        </div>
    );
}
 
export default ContactsInfoBody;