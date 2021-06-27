import firebase from 'firebase/app';
import 'firebase/firestore'; // NoSQL DataBase
import 'firebase/auth';

const FireBaseConfig = {
    apiKey: "AIzaSyB0li5hQUwOSUpJPqWj7dwj_yq333X5vT8",
    authDomain: "react-redux-bd.firebaseapp.com",
    projectId: "react-redux-bd",
    storageBucket: "react-redux-bd.appspot.com",
    messagingSenderId: "584936813485",
    appId: "1:584936813485:web:b229517dfe77b91e726724"
};

firebase.initializeApp(FireBaseConfig);
firebase.firestore().settings({ timestampsInSnapshot: true });

export default firebase;