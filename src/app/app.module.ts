import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule,
  MatIconModule, MatMenuModule, MatSidenavModule,
  MatExpansionModule,MatToolbarModule,MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import SidebarModule from './packages/sidebar/sidebar.module';
import ToolbarModule from './packages/toolbar/toolbar.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDGTLXyAMD-E-EEx064vpGD5KFmilLe5yc",
  authDomain: "ionic2-test-cb300.firebaseapp.com",
  databaseURL: "https://ionic2-test-cb300.firebaseio.com",
  projectId: "ionic2-test-cb300",
  storageBucket: "ionic2-test-cb300.appspot.com",
  messagingSenderId: "888777950862"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SidebarModule,
    ToolbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
