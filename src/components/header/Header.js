import React, {useState} from "react";
import logo from "assets/img/logo.png";
import { Link } from "react-router-dom";
import "./header.css";
import BurgerButton from "components/button/BurgerButton";

const Header = () => {

    const [clicked, setClicked] = useState(false);

    const handleClicked = () => {
        setClicked(!clicked)
    }

    return(
        <nav className="navbar" >
        <Link to="/"id="nav-a" href="#">
          <img src={logo} className="logo" alt="logo"/>
        </Link>
        <div className="navbar-collapse">
          <ul className={`navbar-nav ${clicked ? 'active' : ''}`}>
            <li className="nav-item mr-4" >
              <Link to="/" className="nav-link ">Inicio</Link>
            </li>
            <li className="nav-item mr-4">
              <Link to="/us" className="nav-link">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="burger-container">
           <BurgerButton clicked={clicked} handleClick={handleClicked}/>
        </div>
      </nav>
    )
}

export default Header;