
import './MoneyHeader.css'

const MoneyHeader = () => {
    const data = localStorage.getItem('ActiveUser')
    const user = JSON.parse(data)

    const longDateFrom = user.budgetFrom
    const formattedDateFrom = longDateFrom.substring(0, 10)
    const yearDateFrom = formattedDateFrom.substring(2,4)
    const monthDateFrom = formattedDateFrom.substring(5,7)
    const dayDateFrom = formattedDateFrom.substring(8,10)
    const fullDateFrom = `${dayDateFrom}/${monthDateFrom}/${yearDateFrom}`

    let fullDateTill;
    if(user.budgetTo != null){
        const longDateTill = user.budgetTo
        const formattedDateTill = longDateTill.substring(0, 10)
        const yearDateTill = formattedDateTill.substring(2,4)
        const monthDateTill = formattedDateTill.substring(5,7)
        const dayDateTill = formattedDateTill.substring(8,10)
        fullDateTill = `${dayDateTill}/${monthDateTill}/${yearDateTill}`
    }else{
        fullDateTill = 'Not Set'
    }

    return (
        <div className="money-header-div">
            <div className="money-date-from-div">
                <p className="money-date-from-text">{`Budget From: ${fullDateFrom}`}</p>
            </div>
            <div className="money-date-to-div">
                <p className="money-date-to-text">{`Budget Till: ${fullDateTill}`}</p>
            </div>
            <div className="money-spent-div">
                <p className="money-spent-title">Spent</p>
                <p className="money-spent">{`${user.currency}${user.totalSpent}`}</p>
            </div>
            <div className="money-remaining-div">
                <p className="money-remaining-title">Remaining</p>
                <p className="money-remaining">{`${user.currency}${user.budget - user.totalSpent}`}</p>
            </div>
            <div className="money-budget-div">
                <p className="money-budget-title">Budget</p>
                <p className="money-budget">{`${user.currency}${user.budget}`}</p>
            </div>
        </div>
    );
}
 
export default MoneyHeader;