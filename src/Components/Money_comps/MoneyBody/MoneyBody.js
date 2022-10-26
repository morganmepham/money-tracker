import MoneyHeader from '../MoneyHeader/MoneyHeader';
import MoneySidebar from '../MoneySidebar/MoneySidebar';
import RecentTransactions from '../RecentTransactions/RecentTransactions';
import './MoneyBody.css'


const MoneyBody = () => {
    return (
        <div className="money-body">
            <MoneyHeader />
            <RecentTransactions />
            <MoneySidebar />
        </div>
    );
}
 
export default MoneyBody;