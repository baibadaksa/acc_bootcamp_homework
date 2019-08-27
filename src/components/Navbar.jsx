import React from 'react';
import {Link} from "react-router-dom";


const Navbar = ({user, logout}) => {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse"                     data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
                        <div className="navbar-nav">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            <Link to="/read" className="nav-item nav-link">Read</Link>
                            { user.token ? (<Link to="/create" className="nav-item nav-link">Compose</Link>) : null }
                            { user.token ? null : ( <Link to="/login" className="nav-item nav-link">Log in</Link> )}
                            { user.token ? null : (<Link to="/register" className="nav-item nav-link">Register</Link>)}
                        </div> 
                            { user.token ? (<button onClick={logout} className="btn btn-outline-dark">Log out</button>) : null }
                    {/* </div> */}
                </nav>
            </div>
        );
};

export default Navbar;