import React, { Fragment,useState } from 'react';
import '../style/navCard.css';
import { NavLink } from 'react-router-dom';


const NavCard = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    function filterElements(category) {
      const elements = document.querySelectorAll('.element');
      elements.forEach(element => {
        if (element.getAttribute('data-category') === category) {
          element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      });
    }
    
    return ( 
        <Fragment>
        <h1 className='Blog'>Blog</h1>
        <nav className="navCard">
        <div className="nav-container-Card">
          <ul className={click ? "nav-menu-Card active" : "nav-menu-Card"}>
            <li className="nav-item-Card">
              <NavLink
                exact
                to="#"
                className="nav-links-Card"
                onClick={filterElements}
              >
                Diseño
              </NavLink>
            </li>
            <li className="nav-item-Card">
              <NavLink
                exact
                to="#"
                className="nav-links-Card"
                onClick={filterElements}
              >
                Tendencias
              </NavLink>
            </li>
            <li className="nav-item-Card">
              <NavLink
                exact
                to="#"
                className="nav-links-Card"
                onClick={filterElements}
              >
                Consejos
              </NavLink>
            </li>
            <li className="nav-item-Card">
              <NavLink
                exact
                to="#"
                className="nav-links-Card"
                onClick={filterElements}
              >
                Todo
              </NavLink>
            </li>
          </ul>

        </div>
      </nav>
        </Fragment>
     );
}
 
export default NavCard;