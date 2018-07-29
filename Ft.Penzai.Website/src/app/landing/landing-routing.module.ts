import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { SigninComponent } from './signin/signin.component';
import { CheckEmailsInformationComponent } from './register/check-emails-information/check-emails-information.component';
import { ContactComponent } from './contact/contact.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { RegisterOverlayComponent } from './register/register-overlay.component';
import { EmailConfirmedComponent } from './register/email-confirmed/email-confirmed.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent,
    children: [
      { path: '', redirectTo: '/welcome', pathMatch: 'full'},
      { path: 'welcome', component: HomeComponent },
      { path: 'how-it-works', component: HowItWorksComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent},
      { path: 'signup', component: RegisterOverlayComponent },
      { path: 'email-confirmed', component: EmailConfirmedComponent },
      { path: 'check-emails', component: CheckEmailsInformationComponent },
      { path: 'signin', component: SigninComponent },
    ]
  }];
@NgModule(
  {
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class LandingRoutingModule { }
