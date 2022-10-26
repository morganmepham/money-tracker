import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './TransactionBody.css'

const TransactionBody = () => {
    const year = new Date().getFullYear()
    const month = new Date().getMonth() + 1
    const day = new Date().getDate() 
    const fullDate = `${year}-${month}-${day}`
    const testDate = new Date()
    const localeDate = testDate.toLocaleDateString()

    const [contactSearch, setContactSearch] = useState('')
    const [userSearchText, setUserSearchText] = useState('')
    const [searchResults, setSearchResults] = useState(null)
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState(fullDate)

    const navigate = useNavigate()
    class Transaction{
        constructor(amount, dateStamp, contact, dateCode){
            this.amount = amount
            this.dateStamp = dateStamp
            this.dateCode = dateCode
            this.contact = contact
        }
    }
    const data = localStorage.getItem('ActiveUser')
    const userData = JSON.parse(data)
    const fullContactList = userData.fullContactList
    const filterResults = () => {
        const userSearchTextCaps = userSearchText.toUpperCase()
        const userSearch = userSearchTextCaps  //.toUpperCase()
        
        const results = fullContactList.filter(contact => {
            return contact.contact.startsWith(userSearch)
        })
        return results
    }
    const handleSearch = () => {
        const results = filterResults()
        setSearchResults(results)
        if(results.length < 1){
            setSearchResults(null)
        }
    }
    const handleAddContact = () => {
        navigate('/contacts/add-contact')
    }
    const handleClear = () => {
        setContactSearch('')
        setAmount('')
        setDate('')
        setUserSearchText('')
    }

    const handleConfirm = () => {
        const transaction = new Transaction(amount, localeDate, contactSearch, Date.now())
        
        const data = localStorage.getItem('ActiveUser')
        const user = JSON.parse(data)
        let contacts = user.fullContactList
        if(contactSearch !== '' && amount !== 0 && date !== ''){
        let selectedContact;
        for(let i = 0; i < contacts.length; i++){
            if(contacts[i].contact === contactSearch){
                selectedContact = contacts[i]
                break;
            }
        }
        user.transactions.push(transaction)
        selectedContact.transactions = [...selectedContact.transactions , transaction]
        const amountNum = +amount
        selectedContact.total = selectedContact.total + amountNum

        user.totalSpent = user.totalSpent + amountNum
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
        navigate(-1)
     }
    }


    const handleContactSelect = (e) => {
        const item = e.target
        let itemName;
        if(item.className === 'search-item-contact-name'){
            itemName = item.innerHTML
        }else if(item.className === 'search-item'){
            itemName = item.querySelector('.search-item-contact-name').innerHTML
        }
        setContactSearch(itemName)
        setSearchResults(null)
        setUserSearchText('')
    }
    const handleCancel = () => {
        navigate(-1)
    }

    return (
        <div className="transaction-body">
            <form className="transaction-form">
                <p className="transaction-contact-search-text">To: </p>
                <input type="text" className="transaction-contact-search" value={userSearchText} placeholder='Search Contacts and Locations' onChange ={(e) => {
                    setUserSearchText(e.target.value)
                    handleSearch()
                    if(e.target.value === '' ){
                        setSearchResults(null)
                    }
                }}/>
                <input type="button" className="transaction-add-contact-button" value='Add contact' onClick={handleAddContact}/>

                {searchResults !== null && <div className="search-results-disp-div">
                    {searchResults.map((result) => {
                        return <div className="search-item" key={result.contact} onClick={handleContactSelect}>
                            <p className="search-item-contact-name">{result.contact}</p>
                            <img src={result.pictureSrc} alt="contact img" className="search-item-contact-img" />
                        </div>
                    })}
                </div> }
                <p className="transaction-spent-text">{`${userData.currency}`} </p>
                <input type="text" className="transaction-spent" placeholder='Spent' value={amount} onChange={(e) => {
                    setAmount(e.target.value)
                }}/>
                <p className="transaction-date-text">Date: </p>
                <input type="date" className="transaction-date" value={date} onChange={(e) => {
                    setDate(e.target.value)
                }}/>

                <h3 className="transaction-review-title">Review Transaction</h3>
                <p className="transaction-review-from">From: You</p>
                <p className="transaction-review-to">{`To: ${contactSearch}`}</p>
                <p className="transaction-review-amount">{`Amount: ${userData.currency}${amount}`}</p>

                <input type="button" className="transaction-cancel-button" value='Cancel' onClick={handleCancel}/>
                <input type="button" className="transaction-clear-button" value='Clear' onClick={handleClear}/>
                <input type="button" className="transaction-confirm-button" value='Confirm' onClick={handleConfirm}/>
            </form>
        </div>
    );
}
 
export default TransactionBody;