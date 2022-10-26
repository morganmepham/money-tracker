import './TopContacts.css'

const TopContacts = () => { 
    const data = localStorage.getItem('ActiveUser')
    const userData = JSON.parse(data)
    const contacts = userData.fullContactList

    const people = contacts.filter(person => {
        return person.contactType === 'Person'
    })
    people.sort(function(a,b){
        let keyA = a.total
        let keyB = b.total
        return keyB - keyA
    })
    let topSix =[]
    let length = 5
    if(people.length < 5){
        length = people.length
    }
    
    for(let i = 0; i < length; i++){
        topSix.push(people[i])
    }
    
    return (
        <div className='top-div-item contact-item'>
        <h2 className="top-loc-title">Top Contacts</h2>
        <div className="top-loc-div">
            {topSix.map((contact) => {
                return <div className="top-loc-entry" key={contact.contact}>
                    <p className="top-loc-total-spent">{`${userData.currency}${contact.total}`}</p>
                    <p className="top-loc-location-name">{contact.contact}</p>
                </div>
            })}
            {length === 0 && <h3 className="no-results-text">No Results</h3> }
        </div>
        </div>
    );
}        
export default TopContacts;