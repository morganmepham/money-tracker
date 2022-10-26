import './AllTransactionsBody.css'

const AllTransactionsBody = () => {
    const data = localStorage.getItem('ActiveUser')
    const user = JSON.parse(data)
    const transactions = user.transactions
    const sorted = transactions.sort(function(a,b){
        let keyA = a.dateCode
        let keyB = b.dateCode
        return keyB - keyA
    })
    
    
    return (
        <div className="all-trans-body">
            <h1 className="all-trans-title">All Transactions</h1>
            <div className="all-trans-div">
                {sorted.map((trans) => {
                    const date = trans.dateStamp

                    return <div className="recent-trans-div" key={trans.dateCode}>
                        <p className="recent-amount recent-trans-div-item">{`${user.currency}${trans.amount}`}</p>
                        <p className="recent-contact-name recent-trans-div-item">{trans.contact}</p>
                        <p className="recent-date recent-trans-div-item">{`${date}`}</p>
                    </div>
                })}
            </div>
        </div>
    );
}
 
export default AllTransactionsBody;