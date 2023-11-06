import React, { Fragment,useState } from 'react';
import '../style/navCard.css';
import { NavLink } from 'react-router-dom';
import Blog from './blog.jsx';

const NavCard = () => {
    const [click, setClick] = useState(false);
    const [idNoticia, setIdNoticia] = useState(4);
    const handleClick = () => setClick(!click);
    const filterElements = (event) => {
      setIdNoticia(event.target.id);
    }
    return ( 
        <Fragment>
        <h1 className='Blog'>Blog</h1>
        <nav className="navCard">
        <div className="nav-container-Card">
          <ul className={click ? "nav-menu-Card active" : "nav-menu-Card"}>
            <li className="nav-item-Card">
              <NavLink
                id='1'
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
                id='2'
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
                id='3'
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
                id='4'
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
      <Blog idNoticia = {idNoticia}/>
      </Fragment>
     );
}
 
export default NavCard;