import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDeAlimentosComponent } from './tabla-de-alimentos.component';

describe('TablaDeAlimentosComponent', () => {
  let component: TablaDeAlimentosComponent;
  let fixture: ComponentFixture<TablaDeAlimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaDeAlimentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDeAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
