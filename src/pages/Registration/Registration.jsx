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

            <div className="col-6 mr-auto">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <div>
                            <input className="form-control" type="text" name="username" onChange={this.onChange} placeholder="Username"></input>
                        </div>
                        <div>
                            <input className="form-control" type="email" name="email" onChange={this.onChange} placeholder="E-mail"></input>
                        </div>
                        <div>
                        <input className="form-control" type="password" name="password" onChange={this.onChange} placeholder="Password"></input>
                        </div>
                    </div>
                    <button className="btn btn-outline-dark" type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default Registration;