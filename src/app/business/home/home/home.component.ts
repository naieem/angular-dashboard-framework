import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items:any;
  db:any;
  constructor() { 
    this.db = firebase.database().ref('items');
  }

  ngOnInit() {
    this.db.once("value")
    .then((snapshot)=> {
      console.log(snapshot.val());
      this.items = snapshot.val();
      // var key = snapshot.key; // "ada"
      // var childKey = snapshot.child("name/last").key; // "last"
    });
  }

}
