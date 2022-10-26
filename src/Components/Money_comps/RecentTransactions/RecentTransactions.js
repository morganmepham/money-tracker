import './RecentTransactions.css'

const RecentTransactions = () => {
    const data = localStorage.getItem('ActiveUser')
    const user = JSON.parse(data)
    const transactions = user.transactions
    const sorted = transactions.sort(function(a,b){
        let keyA = a.dateCode
        let keyB = b.dateCode
        return keyB - keyA
    })
    let topTwenty =[]
    let length = 20
    if(sorted.length < 20){
        length = sorted.length
    }
    
    for(let i = 0; i < length; i++){
        topTwenty.push(sorted[i])
    }
    return (
        <div className="recent-transactions-div">
            {topTwenty.map((trans) => {
                const date = trans.dateStamp
                return <div className="recent-trans-div" key={trans.dateCode}>
                    <p className="recent-amount recent-trans-div-item">{`${user.currency}${trans.amount}`}</p>
                    <p className="recent-contact-name recent-trans-div-item">{trans.contact}</p>
                    <p className="recent-date recent-trans-div-item">{`${date}`}</p>
                </div>
            })}
        </div>
    );
}
 
export default RecentTransactions;