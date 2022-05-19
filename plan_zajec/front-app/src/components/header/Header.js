import "./Header.scss";
import logo from "./../../png/logoWhiteTechniScam.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="Schedule">
        <img src={logo} alt="logo" />
        <h1>Plan zajęć</h1>
      </div>
    </div>
  );
};

export default Header;
