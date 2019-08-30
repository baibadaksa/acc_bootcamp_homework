import React, { Component, Fragment } from 'react';
import Moment from "react-moment";
import "moment-timezone";
import parse from "html-react-parser";
import nl2br from "nl2br";

 class Comments extends Component {
     state = {
         text: ""
     }

    componentDidMount(){
        this.props.getComments(this.props.postId, this.props.user.userId);
    }

    onChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    onSubmit = event => {
        event.preventDefault();
        const { userId, postId } = this.props;
       this.props.addComment(this.state.text, userId, postId);
  
    };


    render() {
        const { comments } = this.props;
        console.log(comments);
        return (
            <div>
                <div>
                <ul className='list-unstyled'>
                    {comments.map(comment => (
                     <li className="comment-box" key={comment._id}>
                         <Fragment>
                         <p>{parse(nl2br(comment.text))}</p>
                         <p className="time text-right"><Moment format="DD/MM/YYYY">{comment.createdAt}</Moment></p>
                         </Fragment>
                    </li>
                    ))}
                </ul>
                
                </div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <p>Have something to say?</p>
                    </div>
                    <div>
                        <textarea className="form-control" onChange={this.onChange} name="text" id="comment" cols="50" rows="5"></textarea>
                    </div>
                    <button className="btn btn-outline-dark mt-3" type="submit">Add comment</button>
                </form>
            </div>
        )
    }
}
export default Comments;