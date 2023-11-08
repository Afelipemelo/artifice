import React, { Fragment,useState } from 'react';
import '../style/nadVar.css';
import { NavLink } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Logo from '../assets/image/logo.webp'

const NadVar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    return ( 
        <Fragment>
            <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span className="icon">
              <img src={Logo} alt="logo" />
            </span>
          </NavLink>
          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
                onClick={handleClick}
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/nosotros"
                className="nav-links"
                onClick={handleClick}
              >
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                className="nav-links"
                onClick={handleClick}
              >
                Galeria
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                className="nav-links"
                onClick={handleClick}
              >
                Proyectos
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                  <i className="bi bi-x-lg"></i>{" "}
              </span>
            ) : (
                <span className="icon">
                  <i className="bi bi-list"></i>
              </span>
            )}
          </div>
        </div>
      </nav>
        </Fragment>
     );
}
 
export default NadVar;