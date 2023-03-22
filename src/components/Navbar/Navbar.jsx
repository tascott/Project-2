import { Link } from 'react-router-dom';
import '../../scss/style.css';

function Navbar(props) {
  return (
    <div className="navbar">
      <button>
        <Link to="/">
          Home

        </Link>
      </button>
      <button>
        <Link to="/team">
          Team

        </Link>
      </button>
      <button>
        <Link to="/projects">
          Projects
        </Link>
      </button>
      <button>
        <Link to="/generate">
          Generate
        </Link>
      </button>
    </div>
  );
}

export default Navbar;