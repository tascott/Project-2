function Navbar(props) {
  return (
    <div className="home">
      <h1>Home</h1>
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