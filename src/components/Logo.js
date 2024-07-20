import logo from '../Images/logo_oro.png';
import '../App.css';
import {useState} from 'react';
import Popup from './Popup';
import texts from './texts.json';




function Logo(){
    const [isHovering, setIsHovering] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
    if (!showPopup) { // Mostra il popup solo se non è già visibile
      setShowPopup(true);
    }
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    // Non chiudere il popup qui per evitare che chiuda quando si esce con il mouse
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setIsHovering(false); // Assicurati che l'hover sia disattivato
      };

    return(
        <div className="logo"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
            <img src={logo} alt="Bootstrap" width="200" height="200" className="me-2"/>
        {isHovering && (
            <Popup message={texts.popupMessageLogo} onClose={handleClosePopup} />
          )}
        </div>
        
    )
}
export default Logo;

