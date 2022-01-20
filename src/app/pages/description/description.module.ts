import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescriptionRoutingModule } from './description-routing.module';
import { DescriptionComponent } from './description.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    DescriptionRoutingModule,
    SharedModule
  ]
})
export class DescriptionModule { }
