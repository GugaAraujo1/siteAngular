import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {

  mostrarEdicoes: boolean = false;

  burgers = [
    {
      id: 1,
      name: 'Galúrguer Supremo',
      price: 10.99,
      customizations: ['Sem Cebola', 'Sem Queijo', 'Sem Carne', 'Sem Molho Especial', 'Sem Salada'],
    },
    {
      id: 2,
      name: 'Galúrguer de Frango',
      price: 8.99,
      customizations: ['Sem Queijo', 'Sem Frango', 'Sem Salada'],
    },
    {
      id: 3,
      name: 'Galúrguer Vegetariano',
      price: 8.99,
      customizations: ['Sem Carne de Soja', 'Sem Salada'],
    },
    {
      id: 4,
      name: 'Galúrguer Picante',
      price: 8.99,
      customizations: ['Sem Queijo', 'Sem Carne', 'Sem Pimenta'],
    },
    {
      id: 5,
      name: 'Galúrguer Duplo com Queijo',
      price: 8.99,
      customizations: ['Sem Queijo', 'Sem 1 Carne', 'Sem 2 Carnes', 'Sem Salada'],
    },
    {
      id: 6,
      name: 'Galúrguer Especial do Chefe',
      price: 8.99,
      customizations: ['Sem Cheddar', 'Sem Carne', 'Sem Salada', 'Sem Molho Especial', "Sem Tomate"],
    },
  ];

  selectedBurger: any = null;
  selectedCustomization: any = "Selecione";
  customizationList: string[] = [];
  availableCustomizations: string[] = [];

  ngOnInit() {
  }

  // Função para atualizar as opções de personalização com base no lanche selecionado
  updateCustomizationOptions() {
    if (this.selectedBurger) {
      this.availableCustomizations = this.selectedBurger.customizations;
    } else {
      this.availableCustomizations = [];
    }
  }

  // Função para personalizar o lanche
  customizeBurger() {
    if (this.selectedBurger && this.selectedCustomization !== "Selecione") {
      const burgerName = this.selectedBurger.name;
      const customization = this.selectedCustomization;
      this.customizationList.push(`${burgerName} Personalizado: ${customization}`);
      this.mostrarEdicoes = true; // Mostrar o resumo após a personalização
    }
  }
}
