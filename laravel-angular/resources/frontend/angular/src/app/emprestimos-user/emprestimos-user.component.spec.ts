import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimosUserComponent } from './emprestimos-user.component';

describe('EmprestimosUserComponent', () => {
  let component: EmprestimosUserComponent;
  let fixture: ComponentFixture<EmprestimosUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmprestimosUserComponent]
    });
    fixture = TestBed.createComponent(EmprestimosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
