import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appIfnot]'
})
// tslint:disable-next-line:class-name
export class ifNotDirective {
    @Input('appIfnot') set ifNot(condition: boolean) {
        if (!condition) {
            // show elements
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            // hide elements
            this.viewContainer.clear();
        }
    }

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef) {
    }
}
