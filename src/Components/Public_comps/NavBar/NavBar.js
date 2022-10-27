import './NavBar.css'
import logo2 from '../../../images/logo2.png'
import user_icon from '../../../images/user_icon.png'
import pound_icon from '../../../images/pound_icon.png'
import contacts_icon from '../../../images/contacts_icon.png'
import help_icon from '../../../images/help_icon.png'
import analytics_icon from '../../../images/analytics_icon.png'

import clicked_user_icon from '../../../images/clicked_user_icon.png'
import clicked_pound_icon from '../../../images/clicked_pound_icon.png'
import clicked_contacts_icon from '../../../images/clicked_contacts_icon.png'
import clicked_help_icon from '../../../images/clicked_help_icon.png'
import clicked_analytics_icon from '../../../images/clicked_analytics_icon.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [userIsOpen, setUserIsOpen] = useState(true)
    const [moneyIsOpen, setMoneyIsOpen] = useState(false)
    const [contactsIsOpen, setContactsIsOpen] = useState(false)
    const [analyticsIsOpen, setAnalyticsIsOpen] = useState(false)

    const closeAll = () => {
        setUserIsOpen(false)
        setMoneyIsOpen(false)
        setContactsIsOpen(false)
        setAnalyticsIsOpen(false)
    }
    useEffect(() => {
        closeAll()
        if(window.location.pathname === '/user'){
            setUserIsOpen(true)
        }else if(window.location.pathname === '/user/account_info'){
            setUserIsOpen(true)
        }else if(window.location.pathname === '/money'){
            setMoneyIsOpen(true)
        }else if(window.location.pathname === '/contacts'){
            setContactsIsOpen(true)
        }else if(window.location.pathname === '/contacts/add-contact'){
            setContactsIsOpen(true)
        }else if(window.location.pathname === '/analytics'){
            setAnalyticsIsOpen(true)
        }else if(window.location.pathname === '/transaction'){
            setMoneyIsOpen(true)
        }else if(window.location.pathname === '/money/all_transactions'){
            setMoneyIsOpen(true)
        }
    }, [])

    return (
        <nav className="navbar">
            <img src={logo2} alt="logo" className='navbar-icon nav-logo'/>

            {!userIsOpen && <Link to='/user' className='navbar-link nav-user'><img src={user_icon} alt="user_icon" className='navbar-icon nav-user'/></Link>}

            {userIsOpen && <Link to='/user' className='navbar-link nav-user'><img src={clicked_user_icon} alt="user_icon" className='navbar-icon nav-user'/></Link>}

            {!moneyIsOpen && <Link to='/money' className='navbar-link nav-money'><img src={pound_icon} alt="pound_icon" className='navbar-icon nav-money'/></Link>}

            {moneyIsOpen && <Link to='/money' className='navbar-link nav-money'><img src={clicked_pound_icon} alt="pound_icon" className='navbar-icon'/></Link>}

            {!contactsIsOpen && <Link to='/contacts' className='navbar-link nav-contacts'><img src={contacts_icon} alt="contacts_icon" className='navbar-icon'/></Link>}

            {contactsIsOpen && <Link to='/contacts' className='navbar-link nav-contacts'><img src={clicked_contacts_icon} alt="contacts_icon" className='navbar-icon'/></Link>}

            {!analyticsIsOpen && <Link to='/analytics' className='navbar-link nav-help'><img src={analytics_icon} alt="help_icon" className='navbar-icon'/></Link>}

            {analyticsIsOpen && <Link to='/analytics' className='navbar-link nav-help'><img src={clicked_analytics_icon} alt="help_icon" className='navbar-icon'/></Link>}

        </nav>
    );
}
 
export default NavBar;