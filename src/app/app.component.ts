import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Galúrguer';
  currentItem = 'Galúrguer Supremo';
  currentnum = 7.99;
  fotoSupremo = '../../assets/imagens/LancheDoDia.png'

  itensCatalogo = [
    { name: 'Galúrguer Supremo', price: 10.99 },
    { name: 'Galúrguer de Frango', price: 8.99 },
    { name: 'Galúrguer Vegetariano', price: 8.99 },
    { name: 'Galúrguer Picante', price: 8.99 },
    { name: 'Galúrguer Duplo com Queijo', price: 8.99 },
    { name: 'Galúrguer Especial do Chef', price: 8.99 },
    // Adicione mais itens do catálogo aqui
  ];
}
