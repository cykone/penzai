import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessLandingComponent } from './business-landing.component';
import { BusinessHomeComponent } from './business-home/business-home.component';

const routes: Routes = [
  {
    path: 'business', component: BusinessLandingComponent,
    children: [
      { path: '', component: BusinessHomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
