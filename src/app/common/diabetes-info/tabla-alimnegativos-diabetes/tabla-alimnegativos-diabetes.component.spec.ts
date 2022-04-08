import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAlimnegativosDiabetesComponent } from './tabla-alimnegativos-diabetes.component';

describe('TablaAlimnegativosDiabetesComponent', () => {
  let component: TablaAlimnegativosDiabetesComponent;
  let fixture: ComponentFixture<TablaAlimnegativosDiabetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAlimnegativosDiabetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAlimnegativosDiabetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
