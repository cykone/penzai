import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PenzaiCommonModule } from '../penzai-common/penzai-common.module';

import { MembersRoutingModule } from './members-routing.module';
import { SelfAssessmentComponent } from './self-assessment/self-assessment.component';
import { OnBoardingComponent } from './on-boarding/on-boarding.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../penzai-common/interceptors/token.interceptor';
import { MembersMainComponent } from './members-main.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { PersonaComponent } from './inspiration/persona/persona.component';
import { LearningComponent } from './learning/learning.component';

import { PersonaService } from './inspiration/persona/persona.service';
import { PersonalityComponent } from './on-boarding/personality/personality.component';
import { FocusComponent } from './on-boarding/personality/focus/focus.component';
import { InformationComponent } from './on-boarding/personality/information/information.component';
import { DecissionComponent } from './on-boarding/personality/decission/decission.component';
import { LifeComponent } from './on-boarding/personality/life/life.component';
import { CorporateCultureComponent } from './on-boarding/corporate-culture/corporate-culture.component';
import { InteractionComponent } from './on-boarding/corporate-culture/interaction/interaction.component';
import { ChangeComponent } from './on-boarding/corporate-culture/change/change.component';
import { PersonaDetailComponent } from './inspiration/persona/persona-detail/persona-detail.component';
import { WelcomeMessageComponent } from './on-boarding/welcome-message/welcome-message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MembersRoutingModule,
    PenzaiCommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    PersonaService],
  declarations: [
    SelfAssessmentComponent,
    OnBoardingComponent,
    DashboardComponent,
    MembersMainComponent,
    InspirationComponent,
    PersonaComponent,
    LearningComponent,
    PersonalityComponent,
    FocusComponent,
    InformationComponent,
    DecissionComponent,
    LifeComponent,
    CorporateCultureComponent,
    InteractionComponent,
    ChangeComponent,
    PersonaDetailComponent,
    WelcomeMessageComponent]
})
export class MembersModule { }
