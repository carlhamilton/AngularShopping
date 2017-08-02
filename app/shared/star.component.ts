import { Component, OnChanges, Input, Output } from '@angular/core';

@Component({
    selector: 'chtsi-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

export class StarComponent implements OnChanges {
   @Input() rating: number;
    starWidth: number;
    @Output() notify: EventEmitter<string> =
    new EventEmitter<string>();

    onClick() {
        this.notify.emit('clicked!');
    }

ngOnChanges(): void {
    this.starWidth = this.rating * 86/5;
}
}