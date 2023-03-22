import "../../scss/style.css";
import GarageLogo from "../../assets/images/Garage.webp";

function Header() {
  return (
    <div className="header">
      <img className="WGLogo" src={GarageLogo} alt="Garage Web Logo" />
    </div>
  );
}

export default Header;
