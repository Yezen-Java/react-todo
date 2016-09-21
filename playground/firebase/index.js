import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCBs_Gz5sOMqUfH3zje7hKpjDKTtSc6jBI",
    authDomain: "yezen-todo-app.firebaseapp.com",
    databaseURL: "https://yezen-todo-app.firebaseio.com",
    storageBucket: "yezen-todo-app.appspot.com",
    messagingSenderId: "30886655326"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app:{
    name: 'Todo App',
    version:'1.0.0'
  },
  isRunning: true,
  user:{
    name: 'Yezen',
    age:21
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added',(snapshot)=>{
  console.log('New todo added',snapshot.key, snapshot.val());
});

todosRef.push({
  text:'Todo 1'
});

todosRef.push({
  text:'Todo 2'
});
