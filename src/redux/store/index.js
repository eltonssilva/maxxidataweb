import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from 'redux-thunk';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer   from '../reducers';
import storageSession from 'redux-persist/es/storage/session'

const persistConfig = {
    key: "roots",    
    storage: storageSession,
    stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
export const getPersistor = () => persistor;
export const getStore = () => store;
export const getState = () => {
    return store.getState();
};

export default {
    getStore,
    getState,
    getPersistor
}
