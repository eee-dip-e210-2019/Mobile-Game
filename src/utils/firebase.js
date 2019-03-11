import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const FirebaseContext = React.createContext(null);
const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCqb9PDTzmp8EB7GhczJfRLcchsD5jBTVQ',
  authDomain: 'eee-dip.firebaseapp.com',
  databaseURL: 'https://eee-dip.firebaseio.com',
  projectId: 'eee-dip',
};

class FirebaseAppBase {
  constructor(configuration) {
    firebase.initializeApp(configuration);
    this.firestore = firebase.firestore();
  }

  submit(data) {
    return this.firestore
      .collection('users')
      .doc(new Date().toISOString())
      .set(data);
  }
}

const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {fb => <Component {...props} firebase={fb} />}
  </FirebaseContext.Consumer>
);

const FirebaseApp = Object.freeze(new FirebaseAppBase(FIREBASE_CONFIG));

export { FirebaseContext, FirebaseApp, withFirebase };
