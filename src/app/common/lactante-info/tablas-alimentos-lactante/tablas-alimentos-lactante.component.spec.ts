import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasAlimentosLactanteComponent } from './tablas-alimentos-lactante.component';

describe('TablasAlimentosLactanteComponent', () => {
  let component: TablasAlimentosLactanteComponent;
  let fixture: ComponentFixture<TablasAlimentosLactanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablasAlimentosLactanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasAlimentosLactanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
