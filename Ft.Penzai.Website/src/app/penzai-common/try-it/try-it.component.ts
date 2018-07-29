import { Component, OnInit, Injector } from '@angular/core';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { OverlayService } from '../overlays/overlay.service';

@Component({
  selector: 'app-try-it',
  templateUrl: './try-it.component.html',
  styleUrls: ['./try-it.component.css']
})
export class TryItComponent implements OnInit {

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
