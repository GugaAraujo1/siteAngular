import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  @Input() items: any[] = []; // Lista de itens do catálogo

  constructor() {}

}
