import logo from "../logo.svg";

function Navbar() {
  return (
    <nav>
      <img src={logo} className="nav--image"></img>
      <h5 className="nav--title">my travel journal</h5>
    </nav>
  );
}

export default Navbar;
