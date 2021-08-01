import React from 'react';
import { useSelector } from "react-redux";
import Home from './pages/Home';
import Login from './pages/login';


import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import firebase from 'firebase';

export default () => {
    

    const user  = useSelector(state => state.Users.user);

    const PrivateRoute =  ({component: Component, ...rest}) => {

        //  const { isAuthenticated } = useAuth0;
       
          const _isAuthenticated =  user ? true : false;
          
          console.log("isAuthenticated", _isAuthenticated)
      
          return (
              // Show the component only when the user is logged in
              // Otherwise, redirect the user to /signin page
              <Route {...rest} render={props => (
                  _isAuthenticated ?
                  <Component {...props} />
                  : <Redirect to="/" />  
              )} />
          );
      };

    return(
        <BrowserRouter>
            <Switch>

                <PrivateRoute component={Home} path="/home" exact />

                <Route exact path='/'>
                    <Login />
                </Route>
            
              


            </Switch>
        </BrowserRouter>
    )
};