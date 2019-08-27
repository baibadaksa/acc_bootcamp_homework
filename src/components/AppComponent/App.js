import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//-------------Containers----------------------
import Navbar from "../Navbar";
import Home from "../../pages/Home/LandingPage";
import AllPosts from "../../pages/AllPosts";
import SinglePost from "../../pages/SinglePost"; // -- ?????!!!!
import Post from "../../pages/Post";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";

function App({user, logout}){

  return (
  <Fragment>
    <Router>
        <Navbar user={user} logout={logout}/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/read' component={AllPosts} />
        <Route path='/read/:postId' component={SinglePost} /> 
        <Route path='/create' component={Post} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Registration} />
      </Switch>
    </Router>
  </Fragment>
  );
}

export default App;
