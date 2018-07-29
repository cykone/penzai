import { Directive, ElementRef, Output, EventEmitter, HostListener, Input } from '@angular/core';
import { TargetLocator } from 'selenium-webdriver';

@Directive({
    selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
    constructor(private el: ElementRef) {
    }

    @Output()
    public appClickOutside = new EventEmitter();

    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement) {
        const clickedInside = this.el.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.appClickOutside.emit(targetElement);
        }
    }
}
