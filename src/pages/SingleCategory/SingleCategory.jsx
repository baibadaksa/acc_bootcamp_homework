import React, { Component } from 'react';
import Categories from "../../components/Categories";
import { Link } from "react-router-dom";

// import {Redirect}  from "react-router-dom";

class SingleCategory extends Component {

    componentDidMount(){
        this.props.getPostsByCategory(this.props.match.params.categoryName);
    }    
    render() {

        const posts = this.props.singleCategory;
        console.log(posts);

        return (
            <div className="row">
                <Categories />
                <div className="col-9 d-flex justify-content-center align-items-center">
                <ul className='list-unstyled'>
                    {posts.map(item => (
                    
                     <li key={item._id}>
                        <Link to={`/read/${item._id}`}>
                             <h1 className='title'>{item.title}</h1> 
                             <p className='content'>{item.content}</p>
                             <h6 className='date'>{item.createdAt}</h6>
                            <img src={`http://localhost:3000/${item.postImage}`} alt='' className='w-25' />
                        </Link>
                     </li>
                    ))}
                </ul>
                </div>
            </div>
        )
    }
}

export default SingleCategory;