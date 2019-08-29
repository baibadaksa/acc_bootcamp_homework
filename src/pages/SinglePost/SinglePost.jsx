import React, { Component } from 'react';
import Comments from "../../components/CommentsComponent";
import Moment from "react-moment";
import "moment-timezone";
import nl2br from "nl2br";
// import {Redirect}  from "react-router-dom";



class SinglePost extends Component {
    componentDidMount(){
        this.props.getSinglePost(this.props.match.params.postId);
    }

    render() {
        const { singlePost } = this.props;
        console.log(this.props.singlePost);
        const content = nl2br(singlePost.content);
        const { postId } = this.props.match.params;
        const { userId } = this.props.user;        
         return (
            <div>
                <div className="container single-post">
                    
                    <img className="post-img" src={`http://localhost:3000/${singlePost.postImage}`} alt=""></img>
                    <h1 className="text-center mt-3">{singlePost.title}</h1>
                    <p>{singlePost.content}</p>
                        <br/>
                    <p className="text-right time"><Moment>{singlePost.createdAt}</Moment></p>
                    
                </div>
                <div className="comments"> 
                    <p className="comment-title">What people have said about this post:</p>
                    <Comments postId={postId} userId={userId}/>
                </div>
            </div>
        )
    }
}

export default SinglePost;
