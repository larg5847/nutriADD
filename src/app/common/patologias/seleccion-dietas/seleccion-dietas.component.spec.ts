import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionDietasComponent } from './seleccion-dietas.component';

describe('SeleccionDietasComponent', () => {
  let component: SeleccionDietasComponent;
  let fixture: ComponentFixture<SeleccionDietasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionDietasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionDietasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
