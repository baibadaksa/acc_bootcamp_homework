import React, { Component } from 'react';
import Categories from "../../components/Categories";
import { Link } from "react-router-dom";

// import {Redirect}  from "react-router-dom";

class AllPosts extends Component {

    componentDidMount(){
        this.props.getAllPosts();
    }    


    render() {
        const { posts } = this.props;
        console.log(this.props.match);
        
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
                            {/* <img src={item.postImage} alt='' className='w-25' /> */}
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