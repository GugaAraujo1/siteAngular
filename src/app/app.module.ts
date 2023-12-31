import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { FormsModule } from '@angular/forms';
import { PedidosGalurguerComponent } from './pedidos-galurguer/pedidos-galurguer.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    PedidosGalurguerComponent,
    EdicaoComponent,
    CatalogoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
