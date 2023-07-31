import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarSenhaComponent } from './gerar-senha.component';

describe('GerarSenhaComponent', () => {
  let component: GerarSenhaComponent;
  let fixture: ComponentFixture<GerarSenhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerarSenhaComponent]
    });
    fixture = TestBed.createComponent(GerarSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
