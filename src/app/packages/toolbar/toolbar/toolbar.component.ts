import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() sidenav: any;
  themes = [{
    name: 'Gray',
    value: 'gray'
  },
  {
    name: 'Purple',
    value: 'purple'
  },
  {
    name: 'Pink',
    value: 'pink'
  },
  {
    name: 'Indigo',
    value: 'indigo'
  }];
  currentTheme = 'gray';
  constructor() { }

  ngOnInit() {
  }
  ToggleSidebar(sidenav) {
    sidenav.toggle();
  }
  ChangeTheme(theme) {
      this.currentTheme = theme;
    }

}
