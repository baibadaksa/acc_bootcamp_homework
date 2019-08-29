import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";

//-------------Containers----------------------
import Navbar from "../Navbar";
import Home from "../../pages/Home/LandingPage";
import AllPosts from "../../pages/AllPosts";
import SinglePost from "../../pages/SinglePost";
import SingleCategory from "../../pages/SingleCategory";
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
        <Route exact path='/read/:postId' component={SinglePost} /> 
        <Route exact path='/read/category/:categoryName' component={SingleCategory}/>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Registration} />

        <PrivateRoute path='/create' component={Post} />
      </Switch>
    </Router>
  </Fragment>
  );
}

export default App;
