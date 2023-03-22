import "../../scss/style.css";
import GarageLogo from "../../assets/images/Garage.webp";

function Header() {
  return (
    <div className="header">
      <img src={GarageLogo} alt="Garage Web Logo" style={{ width: 'clamp(350px, 500px, 30vw)' }} />
    </div>
  );
}

export default Header;
