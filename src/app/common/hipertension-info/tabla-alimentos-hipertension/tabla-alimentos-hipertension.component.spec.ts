import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAlimentosHipertensionComponent } from './tabla-alimentos-hipertension.component';

describe('TablaAlimentosHipertensionComponent', () => {
  let component: TablaAlimentosHipertensionComponent;
  let fixture: ComponentFixture<TablaAlimentosHipertensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAlimentosHipertensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAlimentosHipertensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
