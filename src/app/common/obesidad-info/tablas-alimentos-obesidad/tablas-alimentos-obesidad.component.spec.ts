import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasAlimentosObesidadComponent } from './tablas-alimentos-obesidad.component';

describe('TablasAlimentosObesidadComponent', () => {
  let component: TablasAlimentosObesidadComponent;
  let fixture: ComponentFixture<TablasAlimentosObesidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablasAlimentosObesidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasAlimentosObesidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
