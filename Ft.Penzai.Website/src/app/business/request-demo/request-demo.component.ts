import { Component, OnInit } from '@angular/core';
import { OverlayBaseComponent } from '../../penzai-common/overlays/overlay-base.component';
import { OverlayRef } from '@angular/cdk/overlay';
import { RequestDemoDetails } from './services/request-demo-details';
import { RequestDemoService } from './services/request-demo.service';

@Component({
  selector: 'app-request-demo',
  templateUrl: './request-demo.component.html',
  styleUrls: ['./request-demo.component.css']
})
export class RequestDemoComponent extends OverlayBaseComponent implements OnInit {

  constructor(overlayRef: OverlayRef, private demoService: RequestDemoService) {
    super(overlayRef);
  }

  public requestDemoDetails = new RequestDemoDetails();

  ngOnInit() {
  }

  public onSubmit(): void {
    this.demoService.requestDemo(this.requestDemoDetails)
    .then(_ => {
      // TODO Cancel means close here... fix naming
      this.cancel();
    });
  }
}
