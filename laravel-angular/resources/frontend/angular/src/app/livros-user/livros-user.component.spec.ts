import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosUserComponent } from './livros-user.component';

describe('LivrosUserComponent', () => {
  let component: LivrosUserComponent;
  let fixture: ComponentFixture<LivrosUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivrosUserComponent]
    });
    fixture = TestBed.createComponent(LivrosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
