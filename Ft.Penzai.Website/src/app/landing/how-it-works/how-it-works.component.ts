import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../../penzai-common/overlays/overlay.service';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {

  constructor(private overlayServie: OverlayService) { }

  ngOnInit() {
  }

  public openSignUp(): void {
    this.overlayServie.openSignUp();
  }

}
