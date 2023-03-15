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
    </div>
  );
}

export default Home;
