import { Component } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opened = true;
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';
  // themes = [{
  //   name: 'Gray',
  //   value: 'gray'
  // },
  // {
  //   name: 'Purple',
  //   value: 'purple'
  // },
  // {
  //   name: 'Pink',
  //   value: 'pink'
  // },
  // {
  //   name: 'Indigo',
  //   value: 'indigo'
  // }];
  currentTheme = 'pink';
  // overlap = false;

  watcher: Subscription;

  constructor(media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.opened = false;
        this.over='push';
      }else{
        this.over='side';
      }
    });

  }
  // ToggleSidebar(sidenav) {
  //   sidenav.toggle();
  // }
  // ChangeTheme(theme) {
  //   this.currentTheme = theme;
  // }
}
