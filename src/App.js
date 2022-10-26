import { Route, Routes } from 'react-router-dom';

import './App.css';
import Money from './pages/Money';
import User from './pages/User'
import Contacts from './pages/Contacts'
import Analytics from './pages/Analytics'
import LogIn from './pages/LogIn'
import CreateAccount from './pages/CreateAccount';
import Transaction from './pages/Transaction';
import AddContact from './pages/AddContact'
import AccInfo from './pages/AccInfo';
import AllTransactions from './pages/AllTransactions';
import ContactInfo from './pages/ContactInfo';
import Home from './pages/Home';

function App() {
  if(localStorage.getItem('moneyTracker') === null){
    function start(){
      let data = {
          users: [
            
          ]
      }
      data = JSON.stringify(data)
      localStorage.setItem('moneyTracker', data)
  }
  start()
  }

  return (
    <>
      <div className="App">
      <Routes>
        <Route path = "/">
          <Route index element={<Home />}/>
          <Route path ='create_account' element={<CreateAccount />} />
          <Route path='login' element={<LogIn />} />
          <Route path='user'>
            <Route index element={ <User /> } />
            <Route path='account_info' element={ <AccInfo /> } />
          </Route>
          <Route path= "money" >
            <Route index element={ <Money/> }/>
            <Route path='all_transactions' element={ <AllTransactions /> } />
          </Route>
          <Route path ='contacts'>
            <Route index element ={ <Contacts /> } />
            <Route path='add-contact' element={ <AddContact /> } />
            <Route path=':id' element={<ContactInfo />} />
          </Route>
          <Route path = "analytics" element ={ <Analytics /> } />
          <Route path = 'transaction' element={ <Transaction /> } />
        </Route>
      </Routes>
      </div>
    </>
  );
}

export default App;
