import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    MenuComponent,
    MapComponent
  ],
  exports:[
    MenuComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class SharedModule { }
