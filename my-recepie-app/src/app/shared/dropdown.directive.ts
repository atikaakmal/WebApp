import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive ({
    selector: '[appDropdown]' //attribute selector
})
export class DropdownDirective {

    //here we bind the css class that is defined in 'recipe-detail' component
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}