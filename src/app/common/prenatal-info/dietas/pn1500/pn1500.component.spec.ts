import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pn1500Component } from './pn1500.component';

describe('Pn1500Component', () => {
  let component: Pn1500Component;
  let fixture: ComponentFixture<Pn1500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pn1500Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pn1500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
