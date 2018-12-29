import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './business/business.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/business',
    pathMatch: 'full'
  },
  {
    path: 'business',
    component: BusinessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
