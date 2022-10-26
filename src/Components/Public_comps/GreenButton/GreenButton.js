import './GreenButton.css'

const GreenButton = (props) => {
    return (
        <input type="button" className="green-button" value={props.text} onClick ={props.func} />
    );
}
 
export default GreenButton;