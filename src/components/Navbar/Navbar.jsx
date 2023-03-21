import { Link } from 'react-router-dom';
import '../../scss/style.css';

function Navbar(props) {
  return (
    <div className="navbar">
      <Link to="/home">
        Home
        <br />
      </Link>
      <Link to="/team">
        Team
        <br />
      </Link>
      <Link to="/projects">
        Projects
        <br />
      </Link>
      <Link to="/weather">
        Temp Selector
        <br />
      </Link>
    </div>
  );
}

export default Navbar;