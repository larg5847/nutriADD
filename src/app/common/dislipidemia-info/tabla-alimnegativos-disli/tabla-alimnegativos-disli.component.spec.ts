import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAlimnegativosDisliComponent } from './tabla-alimnegativos-disli.component';

describe('TablaAlimnegativosDisliComponent', () => {
  let component: TablaAlimnegativosDisliComponent;
  let fixture: ComponentFixture<TablaAlimnegativosDisliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAlimnegativosDisliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAlimnegativosDisliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
