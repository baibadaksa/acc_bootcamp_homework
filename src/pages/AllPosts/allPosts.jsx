import React, { Component } from 'react';
import Categories from "../../components/Categories";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";

// import {Redirect}  from "react-router-dom";

class AllPosts extends Component {

    componentDidMount(){
        this.props.getAllPosts();
    }    


    render() {
        const { posts } = this.props;
        
        return (
            <div className="row">
                <Categories />
                <div className="col-9 mt-2 d-flex justify-content-center align-items-center">
                <ul className='list-unstyled'>
                    {posts.map(item => (
                     <li className="mt-4 pb-4" key={item._id}>
                        <Link to={`/read/${item._id}`}>
                            <div className="posts">
                            <div>
                                <img src={`http://localhost:3000/${item.postImage}`} alt='' className='round-img' />
                            </div>
                            <div className="pl-5"> 
                                <h1 className='title'>{item.title}</h1> 
                                <p className='content'>{item.content.slice(0, 350)}<span> ...</span></p>
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

export default AllPosts;