import './AddContactBody.css'
import help_icon from '../../images/help_icon.png'
import personPic_Green from '../../images/personPic_Green.png'
import personPic_Blue from '../../images/personPic_Blue.png'
import personPic_Pink from '../../images/personPic_Pink.png'
import personPic_Red from '../../images/personPic_Red.png'

import companyPic_Restaurant from '../../images/companyPic_Restaurant.png'
import companyPic_Game from '../../images/companyPic_Game.png'
import companyPic_Clothes from '../../images/companyPic_Clothes.png'
import companyPic_Bill from '../../images/companyPic_Bill.png'
import companyPic_Supermarket from '../../images/companyPic_Supermarket.png'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const AddContactBody = () => {
    const [name, setName] = useState('')
    const [type, setType] = useState('Person')
    const [imgSrc, setImgSrc] = useState(personPic_Green)
    const [nameColor, setNameColor] = useState({border: '0.2rem solid #34C885'})

    const navigate = useNavigate()
    class Contact{
        constructor(name, type, picSrc){
            this.contact = name
            this.contactType = type
            this.pictureSrc = picSrc
            this.transactions = []
            this.total = 0
        }
    }

    const handlePicChange = (e) => {
        const userInput = e.target.value
        let tempSrc;
        if(type === 'Person'){
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
            }
        }else if(type === 'Company'){
            switch (userInput){
                case 'Bill':
                    tempSrc = companyPic_Bill;
                    break;
                case 'Game':
                    tempSrc = companyPic_Game;
                    break;
                case 'Restaurant':
                    tempSrc = companyPic_Restaurant;
                    break;
                case 'Supermarket':
                    tempSrc = companyPic_Supermarket;
                    break;
                case 'Clothes':
                    tempSrc = companyPic_Clothes;
                    break;
            }
        }
        setImgSrc(tempSrc)
    }
    const handleAddContact = () => {
        if(name != ''){

            const capsName = name.toUpperCase()
            const data = localStorage.getItem('ActiveUser')
            const user = JSON.parse(data)
            const newContact = new Contact(capsName, type, imgSrc)
    
            let userContacts = user.fullContactList
            userContacts = [...userContacts, newContact]
    
            user.fullContactList = userContacts
            
            const returnData = JSON.stringify(user)
            localStorage.setItem('ActiveUser', returnData)
    
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
        }else{
        setNameColor({border: '0.2rem solid red'})
        }
    }

    const handleCancel = () => {
        navigate(-1)
    }

    return (
        <div className="transaction-body">
            <form className="transaction-form">
                <h2 className="add-contact-title">Add Contact</h2>
                <p className="contact-name-text">Name: </p>
                <input type="text" className="contact-name-input" style={nameColor} onChange={(e) => {
                    setName(e.target.value)
                    setNameColor({border: '0.2rem solid #34C885'})
                }}/>
                <p className="contact-type-text">Contact Type: </p>
                <select className="contact-type-input" onChange={(e) => {
                    setType(e.target.value)
                }}>
                    <option>Person</option>
                    <option>Company</option>
                </select>
                <p className="contact-pic-text">Picture: </p>
                {type === 'Person' && <select className="contact-pic-input" onChange={handlePicChange}>
                    <option>Green</option>
                    <option>Red</option>
                    <option>Pink</option>
                    <option>Blue</option>
                    </select>}
                {type === 'Company' && <select className="contact-pic-input" onChange={handlePicChange}>
                    <option>Bill</option>
                    <option>Clothes</option>
                    <option>Restaurant</option>
                    <option>Game</option>
                    <option>Supermarket</option>
                    </select>}

                <img src={imgSrc} alt="Contact Picture" className="add-contact-pic-display" />
                <p className="add-contact-name-display">{`Name: ${name}`}</p>
                <p className="add-contact-type-display">{`Type: ${type}`}</p>

                <input type="button" className="add-contact-cancel" value='Cancel' onClick={handleCancel}/>
                <input type="button" className="add-contact-confirm" value='Add' onClick={handleAddContact}/>
            </form>
        </div>
    );
}
 
export default AddContactBody;
