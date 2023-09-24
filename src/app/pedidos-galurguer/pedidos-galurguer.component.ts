import { Component } from '@angular/core';

@Component({
  selector: 'pedidos-galurguer',
  templateUrl: './pedidos-galurguer.component.html',
  styleUrls: ['./pedidos-galurguer.component.css']
})
export class PedidosGalurguerComponent {

  burgers: string[] = [
    'Galúrguer Supremo',
    'Galúrguer de Frango',
    'Galúrguer Vegetariano',
    'Galúrguer Picante',
    'Galúrguer Duplo com Queijo',
    'Galúrguer Especial do Chef'
  ];

  newBurgerName: string = ''; // Adicione esta linha para declarar a variável newBurgerName

  addNewBurger(burgerName: string) {
    if (burgerName.trim() !== '') {
      this.burgers.push(burgerName);
      this.newBurgerName = ''; // Limpar o campo após adicionar o hambúrguer
    }
  }

  clearInput() {
    this.newBurgerName = ''; // Limpar o campo
  }
}
