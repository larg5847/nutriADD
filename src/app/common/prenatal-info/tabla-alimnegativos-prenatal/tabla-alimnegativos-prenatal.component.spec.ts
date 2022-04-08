import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAlimnegativosPrenatalComponent } from './tabla-alimnegativos-prenatal.component';

describe('TablaAlimnegativosPrenatalComponent', () => {
  let component: TablaAlimnegativosPrenatalComponent;
  let fixture: ComponentFixture<TablaAlimnegativosPrenatalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAlimnegativosPrenatalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAlimnegativosPrenatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
