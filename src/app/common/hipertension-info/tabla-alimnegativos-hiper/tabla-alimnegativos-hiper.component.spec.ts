import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAlimnegativosHiperComponent } from './tabla-alimnegativos-hiper.component';

describe('TablaAlimnegativosHiperComponent', () => {
  let component: TablaAlimnegativosHiperComponent;
  let fixture: ComponentFixture<TablaAlimnegativosHiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAlimnegativosHiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAlimnegativosHiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
