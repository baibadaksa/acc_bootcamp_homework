import React, { Component } from 'react';
// import {Redirect}  from "react-router-dom";



class SinglePost extends Component {
    componentDidMount(){
        this.props.getSinglePost(this.props.match.params.postId);
    }

    render() {
        const { singlePost } = this.props;
        return (
            <div>
                <h1>{singlePost.title}</h1>
                <p>{singlePost.content}</p>
                <br/>
                <p>{singlePost.createdAt}</p>
            </div>
        )
    }
}

export default SinglePost;
