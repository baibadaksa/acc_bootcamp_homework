import React, { Component } from 'react';
import {Link} from "react-router-dom";



class Home extends Component {
    

    render() {
        return (
            <div className="home">
                <h1>Place for your thoughts</h1>
                <div>
                    <Link to="/read"><button className="btn btn-lg btn-outline-light m-2">Read</button></Link>
                    <Link to="/create"><button className="btn btn-lg btn-outline-light m-2">Write</button></Link>
                </div>
            </div>
        )
    }
}

export default Home;