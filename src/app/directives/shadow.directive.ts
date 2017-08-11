import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';

@Directive({ selector: '[appShadow]' })
export class ShadowDirective implements OnInit {

    @Input() appShadow: string;
    @Input() appShadowX: string;
    @Input() appShadowY: string;
    @Input() appShadowBlur: string;

    constructor(
        private elem: ElementRef,
        private renderer: Renderer
    ) { }

    ngOnInit() {
        if (!this.appShadow || !this.appShadowX || !this.appShadowY || !this.appShadowBlur){
            this.renderer.setElementStyle(this.elem.nativeElement, 'box-shadow', '2px 2px 12px #58A362');
        }
        let shadowStr = `${ this.appShadowX } ${ this.appShadowY } ${ this.appShadowBlur } ${ this.appShadow }`;
        this.renderer.setElementStyle(this.elem.nativeElement, 'box-shadow', shadowStr);
    }
}