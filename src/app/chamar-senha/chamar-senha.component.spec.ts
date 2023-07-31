import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamarSenhaComponent } from './chamar-senha.component';

describe('ChamarSenhaComponent', () => {
  let component: ChamarSenhaComponent;
  let fixture: ComponentFixture<ChamarSenhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChamarSenhaComponent]
    });
    fixture = TestBed.createComponent(ChamarSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
