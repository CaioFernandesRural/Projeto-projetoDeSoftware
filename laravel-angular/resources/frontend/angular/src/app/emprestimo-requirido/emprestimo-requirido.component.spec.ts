import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimoRequiridoComponent } from './emprestimo-requirido.component';

describe('EmprestimoRequiridoComponent', () => {
  let component: EmprestimoRequiridoComponent;
  let fixture: ComponentFixture<EmprestimoRequiridoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmprestimoRequiridoComponent]
    });
    fixture = TestBed.createComponent(EmprestimoRequiridoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
