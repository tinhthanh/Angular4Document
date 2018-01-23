import { Angular5Component } from './angular5.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ {
  path: '' , component: Angular5Component
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Angular5RoutingModule { }
