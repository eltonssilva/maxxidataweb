import React from 'react';
import { useDispatch } from "react-redux";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import WorkIcon from '@material-ui/icons/Work';

import firebase from 'firebase';
import * as ActionTypes from '../../redux/types';

export const mainListItems = (
  <div>
    <ListItem button component="a" href="/home" >
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Profissionais" color='green'/>
    </ListItem>


  </div>
);

export  const SecondaryListItems = () => {

  const userDispacth = useDispatch();

  const handlerSair = () =>{
    firebase.auth().signOut();
    userDispacth({type: ActionTypes.ACTIONS_TYPE_USER , payload: null});
    console.log("saiu");
  }
  return (
    <div>
    <ListItem button component="a" onClick={handlerSair} >
      <ListItemIcon>
        <MeetingRoomIcon />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItem>
  </div>
  )
};