import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className={style.butunNavbar}>
      <div className={style.logoHisse}>
        <img className={style.fruit} src={logo} alt="logo" />
      </div>
      <div className={style.links}>
        <Link to="/home">Home</Link>
        <Link to="/menu?type=brealfast">Menu</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/location">Location</Link>
      </div>
      <div className={style.navRight}>
        <Link style={{ cursor: "pointer" }} to={`/contact`}>
          <button style={{ cursor: "pointer" }} className={style.make}>
            MAKE A RESERVATION
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
