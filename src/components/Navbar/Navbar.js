import "./Navbar.css";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>logo</h1>
      </div>
      <ul>
        <li>
          <a href="Home">Home</a>
        </li>
        <li>
          <a href="Blog">Blog</a>
        </li>
        <li>
          <a href="Servise">Service</a>
        </li>
      </ul>
      <button>
        <FaTimes />
      </button>
    </div>
  );
};

export default Navbar;
