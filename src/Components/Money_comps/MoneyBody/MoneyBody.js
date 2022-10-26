import { useNavigate } from 'react-router-dom';
import MoneyHeader from '../MoneyHeader/MoneyHeader';
import MoneySidebar from '../MoneySidebar/MoneySidebar';
import RecentTransactions from '../RecentTransactions/RecentTransactions';
import './MoneyBody.css'


const MoneyBody = () => {
    const navigate = useNavigate()
    const handleAddTransaction = () => {
        navigate('/transaction')
    }
    const handleViewTrans = () => {
        navigate('/money/all_transactions')
    }
    return (
        <div className="money-body">
            <MoneyHeader />
            <RecentTransactions />
            <div className="mobile-money-buttons">
                <input type="button" className="mobile-view-transactions" value='View Transactions' onClick={handleViewTrans}/>
                <input type="button" className="mobile-add-transaction" value='Add Transaction' onClick={handleAddTransaction}/>
            </div>
            <MoneySidebar />
        </div>
    );
}
 
export default MoneyBody;