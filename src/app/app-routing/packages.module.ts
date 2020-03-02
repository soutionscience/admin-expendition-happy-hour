import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PackagesComponent } from '../PAGES/packages/packages.component';

const routes: Routes =[
{path:'', component:PackagesComponent}
]

@NgModule({
  declarations: [PackagesComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ]
})
export class PackagesModule { }
