import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespliegueDietaComponent } from './despliegue-dieta.component';

describe('DespliegueDietaComponent', () => {
  let component: DespliegueDietaComponent;
  let fixture: ComponentFixture<DespliegueDietaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespliegueDietaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespliegueDietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
