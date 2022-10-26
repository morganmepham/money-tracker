import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AccInfoBody.css'

import personPic_Green from '../../../images/personPic_Green.png'
import personPic_Blue from '../../../images/personPic_Blue.png'
import personPic_Pink from '../../../images/personPic_Pink.png'
import personPic_Red from '../../../images/personPic_Red.png'

const AccInfoBody = () => {
    const data = localStorage.getItem('ActiveUser')
    const user = JSON.parse(data)
    const navigate = useNavigate()

    const longDateFrom = user.budgetFrom
    const formattedDateFrom = longDateFrom.substring(0, 10)

    let fullDateTill;
    if(user.budgetTo != null){
        const longDateTill = user.budgetTo
        const formattedDateTill = longDateTill.substring(0, 10)
        fullDateTill = formattedDateTill
    }else{
        fullDateTill = ''
    }

    const [nickname, setNickname] = useState(null)
    const [budget, setBudget] = useState(0)
    const [budgetFrom, setBudgetFrom] = useState(formattedDateFrom)
    const [budgetTill, setBudgetTill] = useState(fullDateTill)
    const [currency, setCurrency] = useState('£')
    const [image, setImage] = useState(personPic_Green)
    const [saveIsInvalid, setSaveIsInvalid] = useState(false)
    const [budgetColor, setBudgetColor] = useState({border: '0.2rem solid #085230'})
    const [budgetTillColor, setBudgetTillColor] = useState({border: '0.2rem solid #085230'})
    const [budgetFromColor, setBudgetFromColor] = useState({border: '0.2rem solid #085230'})

    const handleBudgetFromChange = (e) => {
        setBudgetFrom(e.target.value)
    }
    const handleBudgetTillChange = (e) => {
        setBudgetTill(e.target.value)
    }
    const handleCancel = () => {
        navigate(-1)
    }

    const handlePicChange = (e) => {
        const userInput = e.target.value
        let tempSrc;
            switch (userInput){
                case 'Green':
                    tempSrc = personPic_Green;
                    break;
                case 'Red':
                    tempSrc = personPic_Red;
                    break;
                case 'Pink':
                    tempSrc = personPic_Pink;
                    break;
                case 'Blue':
                    tempSrc = personPic_Blue
                    break;
                default:
                    tempSrc = personPic_Green
            }
            setImage(tempSrc)
        }

    const handleSave = () => {
        if(budgetTill !== '' && budget !== 0 && budgetFrom !== ''){
            if(nickname !== ''){
                user.name = nickname
            }
            if(budget !== 0){
                user.budget = budget
            }
            if(budgetFrom !== ''){
                user.budgetFrom = budgetFrom
            }
            if(budgetTill !== '' && budgetTill != null){
                user.budgetTo = budgetTill
            }
            if(image != null){
                user.profilePicture = image
            }
            user.currency = currency
    
            const returnData = JSON.stringify(user)
            localStorage.setItem('ActiveUser', returnData)
            navigate('/user')
        }else{
            setSaveIsInvalid(true)
            if(budget === 0){
                setBudgetColor({border: '0.2rem solid red'})
            }
            if(budgetTill === ''){
                setBudgetTillColor({border: '0.2rem solid red'})
            }
            if(budgetFrom === ''){
                setBudgetFromColor({border: '0.2rem solid red'})
            }
        }
    }
    return (
        <div className="account-info-body-div">
            <h1 className="account-info-body-title">Account Information</h1>
            <form className="account-info-form">
                <p className="AI-username-text">{`@${user.username}`}</p>

                <div className="AI-set-div">
                    <p className="AI-set-nickname-text">Set Nickname</p>
                    <input type="text" className="AI-nickname-input" value={nickname} onChange={(e) => {
                        setNickname(e.target.value)
                    }}/>
                </div>

                <div className="AI-set-div">
                    <p className="AI-set-pic-text">Set Profile Picture</p>
                    <select className="AI-set-pic-input" onChange={handlePicChange}>
                        <option>Green</option>
                        <option>Red</option>
                        <option>Pink</option>
                        <option>Blue</option>
                    </select>
                </div>

                <div className="AI-set-div">
                    <p className="AI-set-currency-text">Set Currency*</p>
                    <select className="AI-currency-input" value = {currency} onChange={(e) => {
                        setCurrency(e.target.value)
                    }}>
                        <option>£</option>
                        <option>$</option>
                    </select>
                </div>

                <div className="AI-set-div">
                    <p className="AI-set-budget-text">Set Budget*</p>
                    <p className='symbol-tag'>{currency}</p><input type="number" className="AI-budget-input" style={budgetColor} value={budget} onChange={(e) => {
                        setBudget(e.target.value)
                    }}/>
                </div>

                <div className="AI-set-div">
                    <p className="AI-set-budget-from-text">Set Budget From*</p>
                    <input type="date" className="AI-budget-from-input" value={budgetFrom} onChange={handleBudgetFromChange} style={budgetFromColor} required/>
                </div>

                <div className="AI-set-div">
                    <p className="AI-set-budget-till-text">Set Budget Till*</p>
                    <input type="date" className="AI-budget-till-input" value={budgetTill} onChange={handleBudgetTillChange} style={budgetTillColor} required/>
                </div>

                <div className="AI-set-div">
                    <input type="button" className="AI-cancel-changes" value='Cancel' onClick={handleCancel}/> 
                    <input type="button" className="AI-save-changes" value='Save Changes' onClick={handleSave}/> 
                </div>

                <div className="AI-error-div">
                    {saveIsInvalid && <p className="save-invalid-text">All Required Fields must be filled in</p> }
                </div>

            </form>
        </div>
    );
}
 
export default AccInfoBody;