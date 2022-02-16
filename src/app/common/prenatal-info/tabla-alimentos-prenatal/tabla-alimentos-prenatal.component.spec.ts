import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAlimentosPrenatalComponent } from './tabla-alimentos-prenatal.component';

describe('TablaAlimentosPrenatalComponent', () => {
  let component: TablaAlimentosPrenatalComponent;
  let fixture: ComponentFixture<TablaAlimentosPrenatalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAlimentosPrenatalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAlimentosPrenatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
