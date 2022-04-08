import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAlimnegativosRenalComponent } from './tabla-alimnegativos-renal.component';

describe('TablaAlimnegativosRenalComponent', () => {
  let component: TablaAlimnegativosRenalComponent;
  let fixture: ComponentFixture<TablaAlimnegativosRenalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAlimnegativosRenalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAlimnegativosRenalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
