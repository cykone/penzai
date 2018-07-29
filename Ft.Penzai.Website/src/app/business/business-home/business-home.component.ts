import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../../penzai-common/overlays/overlay.service';
import { BusinessOverlayService } from '../services/business-overlay.service';
import { RequestDemoComponent } from '../request-demo/request-demo.component';

@Component({
  selector: 'app-business-home',
  templateUrl: './business-home.component.html',
  styleUrls: ['./business-home.component.css']
})
export class BusinessHomeComponent implements OnInit {

  constructor(private businessOverlayService: BusinessOverlayService) { }

  ngOnInit() {
  }

  public openRequestDemo() {
    this.businessOverlayService.openRequestDemo();
  }
}
