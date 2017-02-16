
import { Injectable } from '@angular/core';
//import * as firebase from 'firebase';
declare var firebase: any;

@Injectable()
export class FirebaseService {
	dbUser: any

	constructor(){
		console.log("in firebase constructor");

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAGxYXbMaCUQYSi6niXiDSp02_lhwNzOlQ",
    authDomain: "quickstart-1f26d.firebaseapp.com",
    databaseURL: "https://quickstart-1f26d.firebaseio.com",
    storageBucket: "quickstart-1f26d.appspot.com",
    messagingSenderId: "1344239853"
  };
  firebase.initializeApp(config);

  	this.dbUser = firebase.database().ref().child('user');
  	console.log(this.dbUser);
	}

	testFirebase(){
		console.log("test firebase");
	}
}