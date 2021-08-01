import React from 'react';
import { useDispatch } from "react-redux";
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import * as ActionTypes from '../../redux/types';
import { useHistory } from 'react-router-dom';

import { useStyles, logLocal } from './styles';

export default function SignInSide() {
  const classes = useStyles();
  const userDispacth = useDispatch();
  const history = useHistory();

  const signInSuccess = async () =>{
    //'/home',
    const user = await  firebase.auth().currentUser;
    userDispacth({type: ActionTypes.ACTIONS_TYPE_USER , payload: user});
    console.log(user);
    history.push('/home');
    return false;
  }
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    callbacks: {
      signInSuccessWithAuthResult : signInSuccess
    },
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      // {
      //   provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //   requireDisplayName : true 
      // },
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      } 
    ],
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        
        <Box m={12}/>
        
        <logLocal>

          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>

          </logLocal>
          
        </div>
      </Grid>
    </Grid>
  );
}