import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pedidos-galuguer',
  templateUrl: './pedidos-galurguer.component.html',
  styleUrls: ['./pedidos-galurguer.component.css']
})
export class PedidosGalurguerComponent {

  burgers: string[] = [];

  valorInput = '';

  adicionarPedido() {
    if (this.valorInput === '') alert('valor inválido');
    else{
      this.burgers.push(this.valorInput);
      this.valorInput = ''; // Limpa o campo após adicionar o hambúrguer
    }
  }

  limparInput() {
    this.valorInput = ''; // Limpa o campo
  }

  removeItens() {
    while (this.burgers.length > 0) {
      this.burgers.pop(); //remove ultimo elemento
    }
  }
}


