import React, { Component } from 'react';
import {Link} from "react-router-dom";

 class Categories extends Component {
    state = {
        categories: ["Business and Finance", "Sports", "Food", "Technology and Science", "Travel", "Fashion and Lifestyle", "Family and Relationships", "Art", "Other"]
    }

    

    render() {
        return (
            <div className="col-3">
                <nav className="nav flex-column">
                <ul className='list-unstyled'>
                    {this.state.categories.map((category, index) => (
                     <li key={category[index]}>
                        <Link to={`/read/category/${category}`}>{category}</Link>
                     </li>
                    ))}
                </ul>

                </nav>   
            </div>
        )
    }
}

export default Categories;