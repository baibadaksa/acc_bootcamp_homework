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
    };

    render() {
        
        const { isCreated } = this.props;

        if(isCreated._id) {
            return <Redirect to={`/read/${isCreated._id}`}/>;
        };
        

        return (
            <div className="form-page d-flex justify-content-center">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <div>
                            <label htmlFor="postTitle">Title:</label>
                            <input id="postTitle" onChange={this.onChange} className="form-control mb-3" type="text" name="title" ></input>
                        </div>
                        <div>
                            <label htmlFor="postCategory">Post category:</label>
                            <select onChange={this.onChange} id="postCategory"className="form-control mb-3" name="category">
                                <option value="Business and Finance">Business and Finance</option>
                                <option value="Sports">Sports</option>
                                <option value="Food">Food</option>
                                <option value="Technology and Science">Technology and Science</option>
                                <option value="Travel">Travel</option>
                                <option value="Fashion and Lifestyle">Fashion and Lifestyle</option>
                                <option value="Family and Relationships">Family and Relationships</option>
                                <option value="Art">Art</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="postText">Text:</label>
                            <textarea id="postText" onChange={this.onChange} className="form-control mb-3" rows="4" cols="50" name="content"></textarea>
                        </div>
                        <div>
                            <label htmlFor="postImage">Image:</label>
                            <input type="file" id="postImage" onChange={this.fileOnChange} className="form-control-file" rows="4" cols="50" name="postImage"></input>
                        </div>
                    </div>
                    <button className="btn btn-outline-dark" type="submit">Create post</button>
                </form>
            </div>
        )
    }
}

export default Post;