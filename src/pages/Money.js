import { Route, Routes } from 'react-router-dom';
import MoneyBody from '../Components/Money_comps/MoneyBody/MoneyBody';
import NavBar from '../Components/Public_comps/NavBar/NavBar'

const Money = () => {
    return (
        <>
            <NavBar />
            <MoneyBody />
        </>
    );
}
 
export default Money;