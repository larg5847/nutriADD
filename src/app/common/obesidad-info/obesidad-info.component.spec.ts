import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObesidadInfoComponent } from './obesidad-info.component';

describe('ObesidadInfoComponent', () => {
  let component: ObesidadInfoComponent;
  let fixture: ComponentFixture<ObesidadInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObesidadInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObesidadInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
