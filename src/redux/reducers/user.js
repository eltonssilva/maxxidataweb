import {
  ACTIONS_TYPE_USER,
  ACTIONS_TYPE_USERS,
  ACTIONS_TYPE_TOKEN_USERS,
  ACTIONS_TYPE_TIME_TOKEN_USERS,
} from '../types'

const INITIAL_STATE = {
  user : null,
  users : [],
  tokenUser : "",
  timeTokenUser : 0,
  }


  export default (state=INITIAL_STATE, action)=>{

    if (action.type == ACTIONS_TYPE_USER){
      return {...state,  user: action.payload}
  }

  else if (action.type == ACTIONS_TYPE_USERS){
    return {...state,  users: action.payload}
}

else if (action.type == ACTIONS_TYPE_TOKEN_USERS){
  return {...state,  tokenUser: action.payload}
}

else if (action.type ==   ACTIONS_TYPE_TIME_TOKEN_USERS){
  return {...state,  timeTokenUser: action.payload}
}

    return state
}

