import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  @Input() item: string = ''; // decorate the property with @Input()
  @Input() num: number = 0;
  @Input() foto: string = '';


}
