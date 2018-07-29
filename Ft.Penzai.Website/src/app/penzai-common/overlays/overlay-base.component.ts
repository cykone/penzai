import { OverlayRef } from '@angular/cdk/overlay';

export class OverlayBaseComponent {

  constructor(private overlayRef: OverlayRef) {
    this.overlayRef.backdropClick().subscribe(_ => this.cancel());
  }

  public cancel(): void {
    this.overlayRef.dispose();
  }
}
