import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {ItemDetailsComponent} from './item-details/item-details.component';
import {HomeComponent} from './home/home.component';
const routes : Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'item/:id',
    component: ItemDetailsComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent, ItemDetailsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class HomeModule {}