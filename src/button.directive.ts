import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[app-button]',
})
export class ButtonDirective implements OnInit, OnChanges {
  @Input() variant: string = '';
  @Input() color: string = '';
  @Input() size: string = '';
  @Input() block: boolean = false;
  @Input() icon: string = '';
  @Input() position: string = 'start';
  @Input() disabled: boolean = false;
  content = '';
  constructor(private elementRef: ElementRef) {
    this.content = this.elementRef.nativeElement.innerHTML;
  }
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.icon) {
      if (this.position === 'start') {
        this.elementRef.nativeElement.innerHTML = `<i class="dds__icon ${this.getPostition}${this.getIcon}" aria-hidden="true"> </i> ${this.content}`;
      } else {
        this.elementRef.nativeElement.innerHTML = `${this.content} <i class="dds__icon ${this.getPostition}${this.getIcon}" aria-hidden="true"> </i> `;
      }
    }
  }
  @HostBinding('class') get classes(): string {
    return `dds__button ${this.getVariant} ${this.getColor} ${this.getSize} ${this.getBlock}`;
  }

  get getIcon() {
    return `dds__icon--${this.icon}`;
  }
  get getPostition() {
    return this.content ? `dds__button__icon--${this.position} ` : '';
  }
  get getVariant() {
    return this.variant ? `${'dds__button--' + this.variant}` : '';
  }
  get getColor() {
    return this.color ? `${'dds__button--' + this.color}` : '';
  }
  get getSize() {
    return this.size ? `${'dds__button--' + this.size}` : '';
  }
  get getBlock() {
    return this.block ? `${'dds__button--block'}` : '';
  }
}
