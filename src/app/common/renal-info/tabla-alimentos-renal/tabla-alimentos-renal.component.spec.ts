import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAlimentosRenalComponent } from './tabla-alimentos-renal.component';

describe('TablaAlimentosRenalComponent', () => {
  let component: TablaAlimentosRenalComponent;
  let fixture: ComponentFixture<TablaAlimentosRenalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAlimentosRenalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAlimentosRenalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
