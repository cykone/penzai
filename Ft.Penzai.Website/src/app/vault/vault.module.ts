import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VaultRoutingModule } from './vault-routing.module';
import { VaultLandingComponent } from './vault-landing.component';

@NgModule({
  imports: [
    CommonModule,
    VaultRoutingModule
  ],
  declarations: [VaultLandingComponent]
})
export class VaultModule { }
