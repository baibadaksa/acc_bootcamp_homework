import React, { Component } from 'react';
import Categories from "../../components/Categories";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";

class SingleCategory extends Component {

    componentDidMount(){
        this.props.getPostsByCategory(this.props.match.params.categoryName);
    }    
    render() {

        const posts = this.props.singleCategory;

        return (
            <div className="row">
                <Categories />
                <div className="col-9 d-flex justify-content-center align-items-center">
                <ul className='list-unstyled'>
                    {posts.map(item => (
                     <li className="mt-4 pb-4 mr-5" key={item._id}>
                        <Link to={`/read/${item._id}`}>
                            <div className="posts">
                                <div>
                                    <img src={`http://localhost:3000/${item.postImage}`} alt='' className='round-img ml-4' />
                                </div>
                                <div className="pl-5"> 
                                    <h1>{item.title}</h1> 
                                    <p>{item.content.slice(0, 350)}<span> ...</span></p>
                                    <p className='time'><Moment>{item.createdAt}</Moment></p>
                                </div>
                            </div>
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