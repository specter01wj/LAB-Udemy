import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgxUnless]'
})
export class NgxUnlessDirective {

  visible: boolean = false;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }


  @Input() set appNgxUnless(condition: boolean) {
    if (!condition && !this.visible) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.visible = true;
    } else {
      this.viewContainer.clear();
      this.visible = false;
    }
  }

}
