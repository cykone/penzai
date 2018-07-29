import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PenzaiCommonModule } from '../penzai-common/penzai-common.module';

import { LandingRoutingModule } from './landing-routing.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterOverlayComponent } from './register/register-overlay.component';
import { LandingComponent } from './landing.component';
import { SigninComponent } from './signin/signin.component';
import { CheckEmailsInformationComponent } from './register/check-emails-information/check-emails-information.component';
import { ContactComponent } from './contact/contact.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { EmailConfirmedComponent } from './register/email-confirmed/email-confirmed.component';
import { FeaturesComponent } from './how-it-works/features/features.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PenzaiCommonModule,
    OverlayModule,
    LandingRoutingModule
  ],
  declarations: [LandingComponent,
    HomeComponent,
    AboutComponent,
    RegisterOverlayComponent,
    SigninComponent,
    CheckEmailsInformationComponent,
    ContactComponent,
    HowItWorksComponent,
    EmailConfirmedComponent,
    FeaturesComponent]

})
export class LandingModule { }
