import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {  
 
  burgers = [
    {
      id: 1,
      name: 'Galúrguer Supremo',
      price: 10.99,
      customizations: ['Sem Cebola', 'Sem Queijo'],
    },
    {
      id: 2,
      name: 'Galúrguer de Frango',
      price: 8.99,
      customizations: ['Sem Tomate', 'Sem Maionese'],
    },
    // Adicione mais lanches aqui
  ];
  
  selectedBurger: any = null;
  selectedCustomization: any = "Selecione";
  customizationList: string[] = [];

  ngOnInit() {
    // Esta função está vazia, mas precisa ser declarada para satisfazer a interface OnInit
  }

  // Adicione esta função para personalizar o lanche
  customizeBurger() {
    if (this.selectedBurger && this.selectedCustomization !== "Selecione") {
      const burgerName = this.selectedBurger.name; // Corrigi 'nome' para 'name'
      const customization = this.selectedCustomization;
      this.customizationList.push(`Personalizado ${burgerName}: ${customization}`);
    }
  }
}
