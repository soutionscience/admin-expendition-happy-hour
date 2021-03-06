import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';

const routes: Routes = [
  {path:'', loadChildren:'./home.module#HomeModule'}
];

@NgModule({
  declarations:[AppComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, AppComponent]
})
export class AppRoutingModule { }
