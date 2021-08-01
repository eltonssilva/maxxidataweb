import {
  ACTIONS_TYPE_LIST_EMPRESA
} from '../types'

const INITIAL_STATE = {
  empresas : [],

  }


  export default (state=INITIAL_STATE, action)=>{

    if (action.type == ACTIONS_TYPE_LIST_EMPRESA){
      return {...state,  empresas: action.payload}
  }

    return state
}

