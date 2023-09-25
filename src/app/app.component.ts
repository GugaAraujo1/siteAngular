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
    { name: 'Galúrguer Supremo', price: 10.99, imagem:'../../assets/imagens/imagemSupremo.jpg'},
    { name: 'Galúrguer de Frango', price: 8.99, imagem: '../../assets/imagens/imagemFrango.jpg' },
    { name: 'Galúrguer Vegetariano', price: 8.99, imagem: '../../assets/imagens/imagemVegetariano.jpg' },
    { name: 'Galúrguer Picante', price: 8.99, imagem: '../../assets/imagens/imagemPicante.jpg' },
    { name: 'Galúrguer Duplo com Queijo', price: 8.99, imagem: '../../assets/imagens/imagemDuplo.png' },
    { name: 'Galúrguer Especial do Chef', price: 8.99, imagem: '../../assets/imagens/imagemChef.jpg' },
  ];
}
