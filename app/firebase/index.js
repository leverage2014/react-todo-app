import firebase from 'firebase';

try {
	var config = {
		apiKey: "AIzaSyD5yQaQ5bMuum9RUoSiVVvSDpQNWKZUHjE",
		authDomain: "yx-todo-app.firebaseapp.com",
		databaseURL: "https://yx-todo-app.firebaseio.com",
		storageBucket: "yx-todo-app.appspot.com"
	};
	firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;