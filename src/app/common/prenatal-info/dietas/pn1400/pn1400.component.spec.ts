import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pn1400Component } from './pn1400.component';

describe('Pn1400Component', () => {
  let component: Pn1400Component;
  let fixture: ComponentFixture<Pn1400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pn1400Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pn1400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
