import logo from "../images/react-logo.png";

function Navbar() {
  return (
    <header>
      <nav>
        <img src={logo} className="nav--icon"></img>
        <h3 className="nav--logo__text">ReactFacts</h3>
        <h4 className="nav--title">React - Project 1</h4>
      </nav>
    </header>
  );
}

export default Navbar;
