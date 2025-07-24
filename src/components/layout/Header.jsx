import { NavLink } from "react-router-dom";
import "../../App.css";

export const Header = () => {
    const getNavLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? "green" : "black",
        };
    };

    return (
        <>
            <header className="section-navbar">
                <section className="top_txt">
                    <div className="head container">
                        <div className="head_txt">
                            <p>Get CinemaTap Membership, 30-day return or refund guarantee.</p>
                        </div>
                        <div className="sing_in_up">
                            <NavLink to="#">SIGN IN</NavLink>
                            <NavLink to="#">SIGN UP</NavLink>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="navbar-brand">
                        <NavLink to="index">
                            <img src="/ct-logo1.png" alt="ct-logo1" className="site-logo" />
                        </NavLink>
                    </div>

                    <nav className="navbar">
                        <ul>
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className="nav-link"
                                    style={getNavLinkStyle}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/about"
                                    className="nav-link"
                                    style={getNavLinkStyle}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/movies"
                                    className="nav-link"
                                    style={getNavLinkStyle}>Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/contact"
                                    className="nav-link"
                                    style={getNavLinkStyle}>Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};