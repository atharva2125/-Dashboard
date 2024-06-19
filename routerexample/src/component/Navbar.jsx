import { NavLink } from "react-router-dom";
import "./Navbar.css";


export const Navbar = () => {
    return (
    <>
      <header>
        <div className="container"> 
            <div className="logo-brand">
                  <NavLink to="/">Thapa Technical</NavLink>
            </div>

            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </nav>
        </div>
      </header>
    </>
    );
}