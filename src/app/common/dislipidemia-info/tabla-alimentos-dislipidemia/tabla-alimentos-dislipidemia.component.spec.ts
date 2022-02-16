import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAlimentosDislipidemiaComponent } from './tabla-alimentos-dislipidemia.component';

describe('TablaAlimentosDislipidemiaComponent', () => {
  let component: TablaAlimentosDislipidemiaComponent;
  let fixture: ComponentFixture<TablaAlimentosDislipidemiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAlimentosDislipidemiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAlimentosDislipidemiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
