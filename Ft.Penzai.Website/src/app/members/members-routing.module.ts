import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfAssessmentComponent } from './self-assessment/self-assessment.component';
import { OnBoardingComponent } from './on-boarding/on-boarding.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../penzai-common/guards/auth.guard';
import { MembersMainComponent } from './members-main.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { PersonaComponent } from './inspiration/persona/persona.component';
import { LearningComponent } from './learning/learning.component';
import { PersonalityComponent } from './on-boarding/personality/personality.component';
import { CorporateCultureComponent } from './on-boarding/corporate-culture/corporate-culture.component';
import { PersonaDetailComponent } from './inspiration/persona/persona-detail/persona-detail.component';
import { WelcomeMessageComponent } from './on-boarding/welcome-message/welcome-message.component';

const routes: Routes = [
  {
    path: 'member',
    component: MembersMainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', redirectTo: 'inspiration', pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
        ],
      },
      {
        path: 'inspiration',
        component: InspirationComponent,
        children: [
          { path: '', redirectTo: 'persona', pathMatch: 'full' },
          { path: 'persona', component: PersonaComponent },
          { path: 'persona/:id', component: PersonaDetailComponent }
        ]
      },
      {
        path: 'learn', component: LearningComponent, children: []
      }
    ]
  },
  {
    path: 'start',
    component: OnBoardingComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', redirectTo: 'welcome', pathMatch: 'full'
      },
      {
        path: 'welcome', component: WelcomeMessageComponent
      },
      {
        path: 'personality', component: PersonalityComponent
      },
      {
        path: 'corporate-culture', component: CorporateCultureComponent
      },
    ]
  },
  {
    path: 'planting', component: SelfAssessmentComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', redirectTo: 'personality', pathMatch: 'full'
      },
      {
        path: 'personality', component: PersonalityComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
