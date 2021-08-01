import firebase from 'firebase';
import * as TypeRedux from '../redux/types';


exports.GetJWT  = async () => {
  const newTime =  Math.round(new Date().getTime()/1000);
  console.log(`${newTime} ${timeTokenUserRedux} Diferença :`, newTime - timeTokenUserRedux);
    let tokenJwt = tokenUserRedux;
  if (newTime - timeTokenUserRedux > 3600){
    tokenJwt = await firebase.auth().currentUser.getIdToken(false);
    userDispacth({type: TypeRedux.ACTIONS_TYPE_TIME_TOKEN_USERS,  payload: newTime});
    userDispacth({type: TypeRedux.ACTIONS_TYPE_TOKEN_USERS,  payload: tokenJwt});
  }
  return tokenJwt;
}