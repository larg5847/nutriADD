import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pn1600Component } from './pn1600.component';

describe('Pn1600Component', () => {
  let component: Pn1600Component;
  let fixture: ComponentFixture<Pn1600Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pn1600Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pn1600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
