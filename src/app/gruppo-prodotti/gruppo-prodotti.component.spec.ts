import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruppoProdottiComponent } from './gruppo-prodotti.component';

describe('GruppoProdottiComponent', () => {
  let component: GruppoProdottiComponent;
  let fixture: ComponentFixture<GruppoProdottiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GruppoProdottiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GruppoProdottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
