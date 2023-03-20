import "./style.css";
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div className="home">
      <h1>Home</h1>
      <Link to="/team">
        Go to Team
        <br />
      </Link>
      <Link to="/projects">
        Go to Projects
        <br />
      </Link>
      <Link to="/weather">
        Go to Temp Selector
        <br />
      </Link>
      <Link to="/team">
        Go to Team Members
        <br />
      </Link>
      <Link to="/generate">
        Go to Invoice Generator
        <br />
      </Link>
    </div>
  );
}

export default Home;
