import React, { Component } from 'react';
import {Link} from "react-router-dom";

 class Categories extends Component {
    render() {
        return (
            <div className="col-3">
                <nav className="nav flex-column">
                    <Link to="">Business/Finance</Link>
                    <Link to="">Sports</Link>
                    <Link to="">Food</Link>
                    <Link to="">Technology/Science</Link>
                    <Link to="">Travel</Link>
                    <Link to="">Fashion/Lifestyle</Link>
                    <Link to="">Family/Relationships</Link>
                    <Link to="">Art</Link>
                    <Link to="">Other</Link>
                </nav>   
            </div>
        )
    }
}

export default Categories;