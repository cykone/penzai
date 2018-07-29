import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

// Services
import { AccountService } from './account/account.service';
import { UserManager } from './account/user.manager';
import { FormsModule } from '@angular/forms';

// Guards
import { AuthGuard } from './guards/auth.guard';
import { FooterComponent } from './footer/footer.component';
import { LegalComponent } from './legal/legal.component';
import { CookiesComponent } from './legal/cookies/cookies.component';
import { PrivacyComponent } from './legal/privacy/privacy.component';
import { TryItComponent } from './try-it/try-it.component';
import { PenzaiLogoComponent } from './general/penzai-logo/penzai-logo.component';
import { OverlayService } from './overlays/overlay.service';
import { TabComponent } from './components/tab/tab.component';
import { TabsComponent } from './components/tab/tabs.component';
import { QuickContactComponent } from './components/contact/quick-contact.component';
import { ContactService } from './components/contact/contact.service';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TimelineSectionComponent } from './components/timeline/timeline-section/timeline-section.component';
import { TimelineBulletComponent } from './components/timeline/timeline-bullet/timeline-bullet.component';
import { ClickOutsideDirective } from './directives/clickOutsideDirective';
import { UserProfileService } from './profile/user-profile.service';
import { LoggingService } from '../logging/logging.service';

const routes: Routes = [
  {
    path: 'legal', component: LegalComponent,
    children: [
      { path: 'privacy', component: PrivacyComponent },
      { path: 'cookies', component: CookiesComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FooterComponent,
    LegalComponent,
    CookiesComponent,
    PrivacyComponent,
    TryItComponent,
    PenzaiLogoComponent,
    TabComponent,
    TabsComponent,
    QuickContactComponent,
    TimelineComponent,
    TimelineSectionComponent,
    TimelineBulletComponent,
    ClickOutsideDirective
  ],
  providers: [AccountService, UserManager, OverlayService, AuthGuard, ContactService, UserProfileService, LoggingService],
  exports: [FooterComponent,
    TryItComponent,
    PenzaiLogoComponent,
    TabsComponent,
    TabComponent,
    QuickContactComponent,
    TimelineComponent,
    TimelineSectionComponent,
    TimelineBulletComponent,
    ClickOutsideDirective]
})
export class PenzaiCommonModule { }
