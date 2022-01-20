import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    MenuComponent,
    MapComponent,
    LoadingSpinnerComponent
  ],
  exports:[
    MenuComponent,
    MapComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class SharedModule { }
