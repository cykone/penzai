import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Routes, RouterModule } from '@angular/router';

// Modules
import { LandingModule } from './landing/landing.module';
import { MembersModule } from './members/members.module';
import { VaultModule } from './vault/vault.module';
import { BusinessModule } from './business/business.module';
import { ProfileModule } from './profile/profile.module';

// Compontnet
import { AppComponent } from './app.component';
import { PenzaiCommonModule } from './penzai-common/penzai-common.module';
import { FeedbackService } from './app.feedback.service';

const routes: Routes = [
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    FormsModule,
    BrowserModule,
    LandingModule,
    MembersModule,
    BusinessModule,
    VaultModule,
    PenzaiCommonModule,
    ProfileModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FeedbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
