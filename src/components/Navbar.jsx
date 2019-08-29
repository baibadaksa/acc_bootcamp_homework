import React from 'react';
import {Link} from "react-router-dom";


const Navbar = ({user, logout}) => {
        return (
            <div>
                <nav className="navbar navig-tabs navbar-expand-lg navbar-light bg-light">
                    <h1 className="navbar-brand navbrand">you better blog!</h1>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navtoggle" aria-controls="navtoggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navig-tabs navbar-collapse" id="navtoggle">
                        <ul className="navig-tabs navbar-nav mt-2 mt-lg-0">
                            <li className="nav-item">
                               <Link to="/" className="nav-link nav-tab">Home</Link> 
                            </li>
                            <li className="nav-item">
                                <Link to="/read" className="nav-link nav-tab">Read</Link>
                            </li>

                             { user.token ? (<li className="nav-item"><Link to="/create" className="nav-link nav-tab">Write</Link></li>) : null }

                             { user.token ? null : ( <li className="nav-item"><Link to="/login" className="nav-link nav-tab">Log in</Link> </li>)}

                            { user.token ? null : (<li className="nav-item"><Link to="/register" className="nav-link nav-tab">Register</Link></li>)}
                            </ul>
                    </div>
                            { user.token ? (<button onClick={logout} className="btn btn-outline-dark">Leave</button>) : null }
                </nav>
            </div>
        );
};

export default Navbar;