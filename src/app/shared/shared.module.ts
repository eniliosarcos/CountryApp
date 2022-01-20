import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { BoxInfoComponent } from './box-info/box-info.component';


@NgModule({
  declarations: [
    MenuComponent,
    MapComponent,
    LoadingSpinnerComponent,
    BoxInfoComponent
  ],
  exports:[
    MenuComponent,
    MapComponent,
    LoadingSpinnerComponent,
    BoxInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class SharedModule { }
