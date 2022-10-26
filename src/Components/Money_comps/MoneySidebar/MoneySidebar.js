import { useNavigate } from 'react-router-dom'
import './MoneySidebar.css'
import help_icon from '../../../images/help_icon.png'

const MoneySidebar = () => {
    const data = localStorage.getItem('ActiveUser')
    const user = JSON.parse(data)
    const navigate = useNavigate()
    let pic;
    if(user.profilePicture === null){
        pic = help_icon
    }else{
        pic = user.profilePicture
    }

    let name;
    if(user.name === null){
        name = user.username
    }else{
        name = user.name
    }
    const handleAddTransaction = () => {
        navigate('/transaction')
    }
    const handleViewTrans = () => {
        navigate('/money/all_transactions')
    }
    return (
        <div className="money-sidebar">
            <div className="money-user-display-div">
                <p className="money-user-name">{name}</p>
                <img src={pic} alt="User Profile Picture" className="money-user-pic" />
            </div>
            <div className="money-buttons-div">
                <input type="button" className="view-all-trans-button" value='View All Transactions' onClick={handleViewTrans}/>
                <input type="button" className='money-add-transaction' value='Add Transaction' onClick={handleAddTransaction}/>
            </div>
        </div>
    );
}
 
export default MoneySidebar;