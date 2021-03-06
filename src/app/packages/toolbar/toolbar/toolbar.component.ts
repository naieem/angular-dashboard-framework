import {Component, OnInit, Input} from '@angular/core';
import * as firebase from 'firebase';
import {Router} from "@angular/router";
import {CoreService} from '../../core';
@Component({selector: 'app-toolbar', templateUrl: './toolbar.component.html', styleUrls: ['./toolbar.component.scss']})
export class ToolbarComponent implements OnInit {
  @Input()sidenav : any;
  themes = [
    {
      name: 'Gray',
      value: 'gray'
    }, {
      name: 'Purple',
      value: 'purple'
    }, {
      name: 'Pink',
      value: 'pink'
    }, {
      name: 'Indigo',
      value: 'indigo'
    }
  ];
  currentTheme = 'pink';
  constructor(private coreService : CoreService, private router : Router) {}

  ngOnInit() {}
  ToggleSidebar(sidenav) {
    sidenav.toggle();
  }
  ChangeTheme(theme) {
    this.currentTheme = theme;
    this
      .coreService
      .changeTheme
      .emit(theme);
  }
  logout() {
    firebase
      .auth()
      .signOut();
    this
      .router
      .navigate(['/login']);
  }

}
