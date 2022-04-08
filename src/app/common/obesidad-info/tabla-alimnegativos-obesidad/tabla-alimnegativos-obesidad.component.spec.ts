import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAlimnegativosObesidadComponent } from './tabla-alimnegativos-obesidad.component';

describe('TablaAlimnegativosObesidadComponent', () => {
  let component: TablaAlimnegativosObesidadComponent;
  let fixture: ComponentFixture<TablaAlimnegativosObesidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAlimnegativosObesidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAlimnegativosObesidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
