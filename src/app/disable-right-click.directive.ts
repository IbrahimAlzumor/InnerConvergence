import { Directive, ElementRef } from '@angular/core';

@Directive({
  standalone: true, 
  selector: '[appDisableRightClick]'
})
export class DisableRightClickDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
    });
  }
}
