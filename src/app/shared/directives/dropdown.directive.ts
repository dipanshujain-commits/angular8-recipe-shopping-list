import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';


@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding('class.open') openDropdown: boolean = false;

    // @HostListener('click') toggleOpen() {
    //   this.openDropdown = !this.openDropdown;
    //   console.log('elem click event', this.elRef.nativeElement);
    // }

    //To be able to toggle the dropdown + close it from anywhere on click
    @HostListener('document:click', ['$event']) closeDropdown(eventData: Event) {
        this.openDropdown = this.elRef.nativeElement.contains(eventData.target) ? !this.openDropdown : false;
       // console.log('window event', eventData);
    }

    constructor(private elRef: ElementRef) {}
}