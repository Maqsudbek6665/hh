import "./Navbar.css";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavbarItem } from "../../static/Static-data";

const Navbar = () => {
  console.log(NavbarItem);
  const [Color, setColor] = useState("black");
  console.log(Color);
  let Location = useLocation();
  // console.log(Location);
  useEffect(() => {
    if (Location.pathname.includes("home")) {
      setColor("red");
    } else if (Location.pathname.includes("blog")) {
      setColor("blue");
    } else if (Location.pathname.includes("service")) {
      setColor("yellow");
    } else {
      setColor("bisque");
    }
  }, [Location.pathname]);

  return (
    <div className="navbar" style={{ background: Color }}>
      <div className="logo">
        <Link to="/">
          <h1>LOGO</h1>
        </Link>
      </div>
      <ul>
        {/* <li><Link to="/home">Home</Link></li><li><Link to="/blog">Blog</Link></li><li><Link to="/service">Service</Link></li> */}
        {NavbarItem.map((item) => (
          <li key={item.id}>
            <Link to={item.pathName}>{item.routeName}</Link>
          </li>
        ))}
      </ul>
      <button>
        <FaTimes />
      </button>
    </div>
  );
};

export default Navbar;
