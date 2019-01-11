import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import SidebarComponent  from './sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MatListModule,
    FlexLayoutModule
  ],
  exports:[SidebarComponent]
})
export default class SidebarModule { }
