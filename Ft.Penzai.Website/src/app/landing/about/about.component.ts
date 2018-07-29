import { Component, OnInit, Injector } from '@angular/core';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { RegisterOverlayComponent } from '../register/register-overlay.component';
import { OverlayService } from '../../penzai-common/overlays/overlay.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private overlayService: OverlayService) { }

  ngOnInit() {
  }

  public openSignUp(): void {
    this.overlayService.openSignUp();
  }
}
