import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../../../penzai-common/overlays/overlay.service';

@Component({
  selector: 'app-landing-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor(private overlayService: OverlayService) { }

  ngOnInit() {
  }

  public openSignUp(): void {
    this.overlayService.openSignUp();
  }
}
