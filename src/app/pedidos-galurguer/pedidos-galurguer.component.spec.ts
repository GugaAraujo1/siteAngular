import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosGalurguerComponent } from './pedidos-galurguer.component';

describe('PedidosGalurguerComponent', () => {
  let component: PedidosGalurguerComponent;
  let fixture: ComponentFixture<PedidosGalurguerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosGalurguerComponent]
    });
    fixture = TestBed.createComponent(PedidosGalurguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
