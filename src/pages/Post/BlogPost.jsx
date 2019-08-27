import React, { Component } from 'react';
import {Redirect}  from "react-router-dom";



class Post extends Component {
    state = {
        title: "",
        content: "",
        category: "",
        postImage: null
    }
    
    onChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    fileOnChange = event => {
        this.setState({
        postImage: event.target.files[0],
        loaded: 0
        })
    };

    onSubmit = event => {
        event.preventDefault();
       this.props.addPost(this.state, this.props.user.userId);
       console.log(this.state);
    };

    render() {
        
        const { user } = this.props;
        if (!user.token) {
             return <Redirect to='/login' />;
        }
        

        return (
            <div className="col-6">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <div>
                            <label htmlFor="postTitle">Title:</label>
                            <input id="postTitle" onChange={this.onChange} className="form-control" type="text" name="title" ></input>
                        </div>
                        <div>
                            <label htmlFor="postCategory">Post category:</label>
                            <select onChange={this.onChange} id="postCategory"className="form-group m-2" name="category">
                                <option value="Business/Finance">Business/Finance</option>
                                <option value="Sports">Sports</option>
                                <option value="Food">Food</option>
                                <option value="Technology/Science">Technology/Science</option>
                                <option value="ravel">Travel</option>
                                <option value="Fashion/Lifestyle">Fashion/Lifestyle</option>
                                <option value="Family/Relationships">Family/Relationships</option>
                                <option value="Art">Art</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="postText">Text:</label>
                            <textarea id="postText" onChange={this.onChange} className="form-control" rows="4" cols="50" name="content"></textarea>
                        </div>
                        <div>
                            <label htmlFor="postImage">Image:</label>
                            <input type="file" id="postImage" onChange={this.fileOnChange} className="" rows="4" cols="50" name="postImage"></input>
                        </div>
                    </div>
                    <button className="btn btn-outline-dark" type="submit">Create post</button>
                </form>
            </div>
        )
    }
}

export default Post;