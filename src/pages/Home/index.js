import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import Container from '@material-ui/core/Container';

import MenuAdmin from '../../components/menu-rastrex';
import Profissional from '../../components/profissional';
import firebase from 'firebase';
import axios from 'axios';

import { getUser } from '../../backEnd/api_users';
import * as TypeRedux from '../../redux/types';
import { useStyles } from './styles';

export default function Entregas () {

  const usersRedux  = useSelector(state => state.Users.users);
  const tokenUserRedux  = useSelector(state => state.Users.tokenUser);
  const timeTokenUserRedux  = useSelector(state => state.Users.timeTokenUser);
  const userDispacth = useDispatch();
  const classes = useStyles();

  useEffect( async () => {
    
    const newTime =  Math.round(new Date().getTime()/1000);
    console.log(`${newTime} ${timeTokenUserRedux} Diferença :`, newTime - timeTokenUserRedux);
      let tokenJwt = tokenUserRedux;
    if ((newTime - timeTokenUserRedux > 3600) || !tokenJwt){
      tokenJwt = await firebase.auth()?.currentUser?.getIdToken(false);
      userDispacth({type: TypeRedux.ACTIONS_TYPE_TIME_TOKEN_USERS,  payload: newTime});
      userDispacth({type: TypeRedux.ACTIONS_TYPE_TOKEN_USERS,  payload: tokenJwt});
    }
    console.log("tokenJwt", tokenJwt);


  const _users = await getUser(axios, tokenJwt);

  userDispacth({type:'ACTIONS_TYPE_USERS', payload: _users});
  console.log(_users);

  }, []);

  return (

    <div className={classes.root}>

      <MenuAdmin />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {
            usersRedux.map((profissional) =>{
              return (
              <Profissional profissional = {profissional}/>
              )
            })
          }
        
        </Container>
      </main>
    </div>
  );
}