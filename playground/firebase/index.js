import firebase from 'firebase';

// Initialize Firebase
var config = {
	apiKey: "AIzaSyD5yQaQ5bMuum9RUoSiVVvSDpQNWKZUHjE",
	authDomain: "yx-todo-app.firebaseapp.com",
	databaseURL: "https://yx-todo-app.firebaseio.com",
	storageBucket: "yx-todo-app.appspot.com"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
	app: {
		name: 'Todo App',
		version: '1.0.0'
	},
	isRunning: true,
	user: {
		name: 'yx',
		age: 25
	}
});

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
	console.log('new todo added', snapshot.key, snapshot.val());
});

todosRef.push({
	text: 'Todo 1'
});

todosRef.push({
	text: 'Todo 2'
});

// firebaseRef.update({
// 	'app/name': 'Todo application',
// 	'user/name': 'Jane'
// });

// firebaseRef.once('value').then((snapshot) => {
// 	console.log('data: ', snapshot.val());
// }, (e) => {
// 	console.log(e);
// });

// var nodesRef = firebaseRef.child('notes');

// nodesRef.on('child_added', (snapshot) => {
// 	console.log('child_added', snapshot.key, snapshot.val());
// });

// nodesRef.on('child_changed', (snapshot) => {
// 	console.log('child_changed', snapshot.key, snapshot.val());
// });

// nodesRef.on('child_removed', (snapshot) => {
// 	console.log('child_removed', snapshot.key, snapshot.val());
// });

// var newNoteRef = nodesRef.push({
// 	text: 'Walk the dog'
// });