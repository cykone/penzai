import { Component, OnInit, Injector } from '@angular/core';
import { Overlay, BlockScrollStrategy, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { RegisterOverlayComponent } from './register/register-overlay.component';
import { SigninComponent } from './signin/signin.component';
import { OverlayService } from '../penzai-common/overlays/overlay.service';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private overlayService: OverlayService) { }

  ngOnInit() {
  }

  public openSignIn(): void {
    this.overlayService.openSignIn();
  }

  public openRegistration(): void {
   this.overlayService.openSignUp();
  }
}
