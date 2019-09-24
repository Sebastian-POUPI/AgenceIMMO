import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agenceImmo';

  constructor() {
    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCZ9hx_GTbwieLLVuZ5RJCQEUxZh1MAaM8",
    authDomain: "agenceimmo-87dc5.firebaseapp.com",
    databaseURL: "https://agenceimmo-87dc5.firebaseio.com",
    projectId: "agenceimmo-87dc5",
    storageBucket: "agenceimmo-87dc5.appspot.com",
    messagingSenderId: "117315791388",
    appId: "1:117315791388:web:e9c2a36c5c520c9a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
}
