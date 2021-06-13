import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    //here we use decorator to listen 'featuredSelected' in App component
    @Output() featureSelected = new EventEmitter<string>();
    
    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}