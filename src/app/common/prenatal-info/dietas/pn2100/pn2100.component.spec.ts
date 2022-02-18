import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pn2100Component } from './pn2100.component';

describe('Pn2100Component', () => {
  let component: Pn2100Component;
  let fixture: ComponentFixture<Pn2100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pn2100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pn2100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
