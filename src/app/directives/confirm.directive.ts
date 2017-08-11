import { Directive, ElementRef, Input, Renderer, HostListener} from '@angular/core';

@Directive({
    selector: `[confirm]`
})
export class ConfirmDirective {

    constructor(private el: ElementRef, private renderer: Renderer) {}
    
    @HostListener('document:click', ['$event'])
    handleClick(event: Event) {
        if (this.el.nativeElement.contains(event.target)) {
            this.highlight('yellow');
        } else {
            this.highlight(null);
        }
    }

    highlight(color) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}