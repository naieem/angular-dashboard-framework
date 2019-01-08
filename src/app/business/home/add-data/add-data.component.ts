import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import * as firebase from 'firebase';
@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {
  profileForm:any;
  database = firebase.firestore();
  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      })
    });
  }

  ngOnInit() {
  }
  onSubmit(){
    this.database.collection('items').add(this.profileForm.value)
    .then((doc)=>{
      console.log(doc);
      this.profileForm.reset();
    })
    .catch((error)=>{
      console.warn('Error found ',error);
    });
    // console.warn(this.profileForm.value);
  }
}
