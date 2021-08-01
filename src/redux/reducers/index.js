import { combineReducers } from 'redux';
import Empresas from './empresas';
import Users from './user';


const rootReducer = combineReducers({
  Empresas: Empresas,
  Users: Users,
});

export default rootReducer;