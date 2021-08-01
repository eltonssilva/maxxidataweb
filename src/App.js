


import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {getStore, getPersistor}    from './../src/redux/store';

import Routes from './routes';
import firebase from 'firebase';


function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyDcBilkZ2e8d-yLGaO2n4tIKHa2iiLaB1I",
    authDomain: "maxxidata-9661f.firebaseapp.com",
    databaseURL: "https://maxxidata-9661f-default-rtdb.firebaseio.com",
    projectId: "maxxidata-9661f",
    storageBucket: "maxxidata-9661f.appspot.com",
    messagingSenderId: "46904567627",
    appId: "1:46904567627:web:0059b039c1bd023bafaace"
  };

  async function initFirebase(){
    if (!firebase.apps.length) {
     await firebase.initializeApp(firebaseConfig);
  }
  else{
     await firebase.app();
  }
  }
  initFirebase();

  const myStore = getStore();  
  const myPersistor = getPersistor();

  return(
    <Provider store={ myStore }>
        <PersistGate 
            persistor={myPersistor} >
            <Routes />
        </PersistGate> 
    </Provider>
  )
}

export default App;
