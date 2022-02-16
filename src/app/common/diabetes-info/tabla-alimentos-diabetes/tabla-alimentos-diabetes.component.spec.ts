import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAlimentosDiabetesComponent } from './tabla-alimentos-diabetes.component';

describe('TablaAlimentosDiabetesComponent', () => {
  let component: TablaAlimentosDiabetesComponent;
  let fixture: ComponentFixture<TablaAlimentosDiabetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAlimentosDiabetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAlimentosDiabetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
