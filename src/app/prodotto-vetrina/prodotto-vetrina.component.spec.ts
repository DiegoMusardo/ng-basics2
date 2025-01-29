import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoVetrinaComponent } from './prodotto-vetrina.component';

describe('ProdottoVetrinaComponent', () => {
  let component: ProdottoVetrinaComponent;
  let fixture: ComponentFixture<ProdottoVetrinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdottoVetrinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdottoVetrinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
