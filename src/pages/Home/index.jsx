import "./style.css";
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div className="Home">
      <>
      <h1>Home</h1>
      <Link to="/team">
        Go to Team
        <br />
      </Link>
    </>
    </div>
  );
}

export default Home;
