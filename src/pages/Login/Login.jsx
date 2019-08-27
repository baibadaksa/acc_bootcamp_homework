import React, { Component } from 'react';
import {Redirect}  from "react-router-dom";



class Login extends Component {
    state = {
        email: "",
        password: "" //!
    }
    
    onChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
    
    onSubmit = event => {
        event.preventDefault();
        for (var key in this.state) {
          if (this.state[key].length < 1) {
            console.log("All fields required");
            return false;
          }
        }
        this.props.loginUser(this.state);
      };
    render() {
        
        const { user } = this.props;
        if (user.token) {
             return <Redirect to='/' />;
        }
        

        return (
            <div className="col-6">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <div>
                            <input onChange={this.onChange} className="form-control" type="email" name="email" placeholder="E-mail"></input>
                        </div>
                        <div>
                        <input onChange={this.onChange} className="form-control" type="password" name="password" placeholder="Password"></input>
                        </div>
                    </div>
                    <button className="btn btn-outline-dark" type="submit">Sign me in!</button>
                </form>
            </div>
        )
    }
}

export default Login;