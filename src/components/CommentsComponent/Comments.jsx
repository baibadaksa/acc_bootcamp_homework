import React, { Component, Fragment } from 'react';

 class Comments extends Component {
     state = {
         text: ""
     }

    componentDidMount(){
        this.props.getComments(this.props.postId);
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
                     <li key={comment._id}>
                         <Fragment>
                         <h6>{comment.text}</h6>
                         <p>{comment.createdAt}</p>
                         </Fragment>
                    </li>
                    ))}
                </ul>
                
                </div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="comment">Have something to say about this post?</label>
                    </div>
                    <div>
                        <textarea onChange={this.onChange} name="text" id="comment" cols="50" rows="5"></textarea>
                    </div>
                    <button type="submit">Add comment</button>
                </form>
            </div>
        )
    }
}
export default Comments;