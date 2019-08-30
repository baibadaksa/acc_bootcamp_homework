import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Registration extends Component {
    state = {
        username: "",
        email: "",
        password: ""
    }

    onChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    onSubmit = event => {
        event.preventDefault();
        for (var key in this.state) {
            if (this.state[key].length < 1) {
              console.log("All fields required");
              return false;
            }
            this.props.registerUser(this.state);
        }
    };
    render() {
        const { isRegistered } = this.props;

        if (isRegistered) {
          return <Redirect to='/login' />;
        }
        
        return (

            <div className="form-page d-flex justify-content-center">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <div>
                            <input className="fields form-control mb-3 mt-5" type="text" name="username" onChange={this.onChange} placeholder="Username"></input>
                        </div>
                        <div>
                            <input className="fields form-control mb-3" type="email" name="email" onChange={this.onChange} placeholder="E-mail"></input>
                        </div>
                        <div>
                        <input className="fields form-control mb-3" type="password" name="password" onChange={this.onChange} placeholder="Password"></input>
                        </div>
                    </div>
                    <button className="btn btn-lg btn-outline-dark" type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default Registration;