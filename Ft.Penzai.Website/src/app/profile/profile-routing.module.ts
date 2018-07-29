import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileMainComponent } from './profile-main.component';
import { AuthGuard } from '../penzai-common/guards/auth.guard';

const routes: Routes = [
  {
    path: 'profile', component: ProfileMainComponent,
    // canActivate: [AuthGuard],
    children: [

    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
