import { Injectable, Injector, Type } from '@angular/core';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { PortalInjector, ComponentPortal } from '@angular/cdk/portal';
import { SigninComponent } from '../../landing/signin/signin.component';
import { RegisterOverlayComponent } from '../../landing/register/register-overlay.component';
import { ComponentType } from '@angular/core/src/render3';

@Injectable()
export class OverlayService {

    constructor(private overlay: Overlay, private injector: Injector) {
    }

    public openSignIn(): void {
        const signInOverlay: OverlayRef = this.overlay.create({
            height: 'auto',
            width: '450px',
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
        });

        // TODO this is a bad cross reference situation... think about a better handling.
        signInOverlay.attach(new ComponentPortal(SigninComponent, null, this.createInjector(signInOverlay)));
    }

    public openSignUp(): void {
        const registerOverlay: OverlayRef = this.overlay.create({
            height: '560px',
            width: '768px',
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
        });

        // TODO this is a bad cross reference situation... think about a better handling.
        registerOverlay.attach(new ComponentPortal(RegisterOverlayComponent, null, this.createInjector(registerOverlay)));
    }

    public openOverlay<T>(type: Type<T>, width: string, height: string): void {
        const registerOverlay: OverlayRef = this.overlay.create({
            height: height,
            width: width,
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
        });

        // TODO this is a bad cross reference situation... think about a better handling.
        registerOverlay.attach(new ComponentPortal(type, null, this.createInjector(registerOverlay)));
    }

    private createInjector(dialogRef: OverlayRef): PortalInjector {
        const injectionToken = new WeakMap();
        injectionToken.set(OverlayRef, dialogRef);
        return new PortalInjector(this.injector, injectionToken);
    }
}
