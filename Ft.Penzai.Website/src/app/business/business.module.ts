import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessLandingComponent } from './business-landing.component';
import { BusinessHomeComponent } from './business-home/business-home.component';
import { PenzaiCommonModule } from '../penzai-common/penzai-common.module';
import { RequestDemoComponent } from './request-demo/request-demo.component';

import { BusinessOverlayService } from './services/business-overlay.service';
import { RequestDemoService } from './request-demo/services/request-demo.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BusinessRoutingModule,
    PenzaiCommonModule
  ],
  declarations: [BusinessLandingComponent, BusinessHomeComponent, RequestDemoComponent],
  providers: [BusinessOverlayService, RequestDemoService],
  bootstrap: [RequestDemoComponent]
})
export class BusinessModule { }
