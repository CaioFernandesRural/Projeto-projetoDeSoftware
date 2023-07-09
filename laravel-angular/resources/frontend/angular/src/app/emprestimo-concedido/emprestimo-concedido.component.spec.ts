import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimoConcedidoComponent } from './emprestimo-concedido.component';

describe('EmprestimoConcedidoComponent', () => {
  let component: EmprestimoConcedidoComponent;
  let fixture: ComponentFixture<EmprestimoConcedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmprestimoConcedidoComponent]
    });
    fixture = TestBed.createComponent(EmprestimoConcedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
