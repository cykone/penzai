import { Component, OnInit, Injector } from '@angular/core';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { PortalInjector, ComponentPortal } from '@angular/cdk/portal';
import { RegisterOverlayComponent } from '../register/register-overlay.component';
import { OverlayService } from '../../penzai-common/overlays/overlay.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private overlayService: OverlayService) { }

  ngOnInit() {
  }

  public openSignUp(): void {
    this.overlayService.openSignUp();
  }
}
