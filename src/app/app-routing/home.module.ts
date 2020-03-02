import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../PAGES/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from '../ELEMENTS/menu/menu.component';


const routes: Routes = [
  {path: '', component: HomeComponent, children:[
    {path:'packages', loadChildren:'./packages.module#PackagesModule'}
  ]}
]

@NgModule({
  declarations: [HomeComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
