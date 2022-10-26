import './TopLocations.css'

const TopLocations = () => {
    const data = localStorage.getItem('ActiveUser')
    const userData = JSON.parse(data)
    const contacts = userData.fullContactList
    const locations = contacts.filter(contact => {
       return contact.contactType === 'Company'
    })
    locations.sort(function(a,b){
        let keyA = a.total
        let keyB = b.total
        return keyB - keyA
    })
    let topSix =[]
    let length = 5
    if(locations.length < 5){
        length = locations.length
    }
    for(let i = 0; i < length; i++){
        topSix.push(locations[i])
    }

    return (
        <div className='top-div-item loc-item'>
            <h2 className="top-loc-title">Top Locations</h2>
            <div className="top-loc-div">
                {topSix.map((location) => {
                    return <div className="top-loc-entry" key={location.contact}>
                        <p className="top-loc-total-spent">{`${userData.currency}${location.total}`}</p>
                        <p className="top-loc-location-name">{location.contact}</p>
                    </div>
                })}
                {length === 0 && <h3 className="no-results-text">No Results</h3> }
            </div>
        </div>
    );
}
 
export default TopLocations;