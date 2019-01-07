import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../core/core.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    console.log(this.coreService.getRouteConfig());
  }

}
