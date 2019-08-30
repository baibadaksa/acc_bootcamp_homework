import React, { Component } from 'react';
import {Redirect}  from "react-router-dom";



class Login extends Component {
    state = {
        email: "",
        password: ""
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
            <div className="form-page justify-content-center d-flex">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <div>
                            <input onChange={this.onChange} className="fields form-control mt-5 mb-3" type="email" name="email" placeholder="E-mail"></input>
                        </div>
                        <div>
                        <input onChange={this.onChange} className="fields form-control mb-3" type="password" name="password" placeholder="Password"></input>
                        </div>
                    </div>
                    <button className="btn btn-lg btn-outline-dark" type="submit">Sign me in!</button>
                </form>
            </div>
        )
    }
}

export default Login;