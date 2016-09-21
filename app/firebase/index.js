import firebase from 'firebase';

try{
  var config = {
      apiKey: "AIzaSyCBs_Gz5sOMqUfH3zje7hKpjDKTtSc6jBI",
      authDomain: "yezen-todo-app.firebaseapp.com",
      databaseURL: "https://yezen-todo-app.firebaseio.com",
      storageBucket: "yezen-todo-app.appspot.com",
      messagingSenderId: "30886655326"
    };
    firebase.initializeApp(config);
}catch(e){

};

export var firebaseRef = firebase.database().ref();
export default firebase;
