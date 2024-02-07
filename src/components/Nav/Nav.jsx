import { NavLink } from "react-router-dom"
import './Nav.module.css'

const Nav = () => {
  return (  
    <nav >
      <NavLink to='/ships' >STAR WARS STARSHIPS</NavLink>
    </nav>
  );
}

export default Nav
;