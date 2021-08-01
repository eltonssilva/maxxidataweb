import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Button from '@material-ui/core/Button'
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import PersonIcon from '@material-ui/icons/Person';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import firebase from 'firebase';
import axios from 'axios';

import * as TypeRedux from '../../redux/types';

import { putUser, putUserLevel } from '../../backEnd/api_users';

import { ListUserSyles, NomeUser, UserDados } from './styles'
import { green } from '@material-ui/core/colors';
import { findAllByTestId } from '@testing-library/react';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Profissional( { profissional } ) {

  const classes = useStyles();
  const empresasRedux  = useSelector(state => state.Empresas.empresas);
  const tokenUserRedux  = useSelector(state => state.Users.tokenUser);
  const timeTokenUserRedux  = useSelector(state => state.Users.timeTokenUser);
  const userDispacth = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [openTipoUser, setOpenTipoUser] = React.useState(false);

  const [newPapel, setnewPapel] = React.useState('usr');
  const [newPapelUp, setnewPapelUp] = React.useState(profissional.nivel);

  const [newHabilitado, setNewHabilitado] = React.useState(false);
  const [newHabilitadoUp, setNewHabilitadoUp] = React.useState(profissional.situacao);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenTipoUser = () => {
    setOpenTipoUser(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseTipoUser = () => {
    setOpenTipoUser(false);
  };

  // MODAL SELECÃO EMPRESA


  const handleChange = (event) => {
    setNewHabilitado(event.target.value);
    console.log(event.target.value);
  };

  const handleChangePapel = (event) => {
    setnewPapel(event.target.value);
    console.log(event.target.value);
  };

  const handleAlteraTipoUser  = async () =>{

  setOpenTipoUser(false);
  const newTime =  Math.round(new Date().getTime()/1000);
  console.log(`${newTime} ${timeTokenUserRedux} Diferença :`, newTime - timeTokenUserRedux);
    let tokenJwt = tokenUserRedux;
  if (newTime - timeTokenUserRedux > 3600){
    tokenJwt = await firebase?.auth()?.currentUser?.getIdToken(false);
    userDispacth({type: TypeRedux.ACTIONS_TYPE_TIME_TOKEN_USERS,  payload: newTime});
    userDispacth({type: TypeRedux.ACTIONS_TYPE_TOKEN_USERS,  payload: tokenJwt});
  }
  console.log(profissional.uuid); 


      const dados = {
        profissional : {
            uuid : profissional.uuid,
            type : newPapel
             
        }
      }

      console.log(JSON.stringify(dados));

      setnewPapelUp(newPapel);
      putUserLevel(axios, tokenJwt, dados);

}

  const handleAlteraHabilitado = async () =>{

    setOpen(false);
  const newTime =  Math.round(new Date().getTime()/1000);
  console.log(`${newTime} ${timeTokenUserRedux} Diferença :`, newTime - timeTokenUserRedux);
    let tokenJwt = tokenUserRedux;
  if (newTime - timeTokenUserRedux > 3600 || !tokenJwt ){
    tokenJwt = await firebase.auth().currentUser.getIdToken(false);
    userDispacth({type: TypeRedux.ACTIONS_TYPE_TIME_TOKEN_USERS,  payload: newTime});
    userDispacth({type: TypeRedux.ACTIONS_TYPE_TOKEN_USERS,  payload: tokenJwt});
  }
  console.log(profissional.uuid); 

  const dados = {
    profissional : {
        uuid : profissional.uuid,
        type : newHabilitado
         
    }
  }
  console.log(JSON.stringify(dados));
  setNewHabilitadoUp(newHabilitado);
    putUser(axios, tokenJwt, dados);

}


const timeConverter = (UNIX_timestamp) =>{
  var a = new Date(UNIX_timestamp);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}


  return (
    <div>
      <ListUserSyles>


        <NomeUser>
          <div>
            {profissional.nome}
          </div>
          <div>
          {profissional.profdes}
          </div>
        </NomeUser>

        <UserDados>
          <div>
          {newPapelUp}
          </div>
        </UserDados>


        <UserDados>
          <div>
          {newHabilitadoUp ?  "Habilitado" : "Desabilitado"}
          </div>
        </UserDados>

        <UserDados>
          <div>
          {profissional?.contato}
          </div>
        </UserDados>

        <UserDados>
          <div>
          {timeConverter(profissional?.createdAt)}
          </div>
        </UserDados>

        <UserDados>
          <div>
          {timeConverter(profissional?.createdAt)}
          </div>
        </UserDados>


        <Button onClick={handleClickOpen}>
          <AccountTreeIcon style={{ color: green[900] }} />
        </Button>

        <Button onClick={handleClickOpenTipoUser}>
          <PersonIcon style={{ color: green[900] }} />
        </Button>
        
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          
          <DialogTitle id="alert-dialog-title">Habilitar Profissional</DialogTitle>
          
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Habilite ou Desabiite o profissional para usar o sistema
            </DialogContentText>
          </DialogContent>

          {/*  */}
          <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Habilitar</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={newHabilitado}
          onChange={handleChange}
          
        >
            <MenuItem value={true} selected = {true}>{"Habilitado"} </MenuItem>
            <MenuItem value={false} >{"Desabilitado"} </MenuItem>

        </Select>
      </FormControl>
          {/*  */}

          <DialogActions>
          <Button variant="outlined" onClick={handleClose} color="primary" autoFocus>
              CANCELAR
            </Button>
            <Button variant="outlined" onClick={(event) => handleAlteraHabilitado(event.target.value)} color="primary" autoFocus>
              SALVAR
            </Button>
          </DialogActions>
         
        </Dialog>
        
        


      </ListUserSyles>

      <Dialog
          open={openTipoUser}
          onClose={handleCloseTipoUser}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          
          <DialogTitle id="alert-dialog-title">Alterar Papel do Usuário</DialogTitle>
          
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Selecione o papel do Usuário
            </DialogContentText>
          </DialogContent>

          {/*  */}
          <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Tipo de Usuário</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={newPapel}
          onChange={handleChangePapel}
          
        >
            <MenuItem value={"usr"} selected = {true}>{"Usuário Simples"} </MenuItem>
            <MenuItem value={"adm"} >{"Administrador"} </MenuItem>
        </Select>
      </FormControl>
          {/*  */}

          <DialogActions>
          <Button variant="outlined" onClick={handleCloseTipoUser} color="primary" autoFocus>
              CANCELAR
            </Button>
            <Button variant="outlined" onClick={(event) => handleAlteraTipoUser(event.target.value)} color="primary" autoFocus>
              SALVAR
            </Button>
          </DialogActions>
         
        </Dialog>
    </div>
  )
};