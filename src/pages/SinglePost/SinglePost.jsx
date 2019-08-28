import React, { Component } from 'react';
import Comments from "../../components/CommentsComponent";
// import {Redirect}  from "react-router-dom";



class SinglePost extends Component {
    componentDidMount(){
        this.props.getSinglePost(this.props.match.params.postId);
    }

    render() {
        const { singlePost } = this.props;
        const { postId } = this.props.match.params;
        const { userId } = this.props.user;        
         return (
            <div>
                <div>
                    <h1>{singlePost.title}</h1>
                    <p>{singlePost.content}</p>
                        <br/>
                    <p>{singlePost.createdAt}</p>
                    <img src={`http://localhost:3000/${singlePost.postImage}`} alt=""></img>
                </div>
                <div>
                    <Comments postId={postId} userId={userId}/>
                </div>
            </div>
        )
    }
}

export default SinglePost;
