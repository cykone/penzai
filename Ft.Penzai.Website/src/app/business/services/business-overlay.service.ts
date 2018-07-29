import { Injectable, Injector } from '@angular/core';
import { OverlayService } from '../../penzai-common/overlays/overlay.service';
import { RequestDemoComponent } from '../request-demo/request-demo.component';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentType } from '@angular/core/src/render3';

@Injectable()
export class BusinessOverlayService {

  constructor(private overlay: Overlay, private injector: Injector, private overlayService: OverlayService) { }

  public openRequestDemo() {
    this.overlayService.openOverlay(RequestDemoComponent, '500px', '620px');
  }
}
