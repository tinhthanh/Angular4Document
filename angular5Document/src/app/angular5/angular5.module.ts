import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Angular5RoutingModule } from './angular5-routing.module';
import { Angular5Component } from './angular5.component';

@NgModule({
  imports: [
    CommonModule,
    Angular5RoutingModule
  ],
  declarations: [Angular5Component]
})
export class Angular5Module { }
