import logo from '../Images/logo_oro.png';
import '../App.css'


function Logo(){
    return(
        <div className="logo">
            <img src={logo} alt="Bootstrap" width="200" height="200" className="me-2"/>
            
        </div>
    )
}
export default Logo;