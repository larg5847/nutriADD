import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pn1700Component } from './pn1700.component';

describe('Pn1700Component', () => {
  let component: Pn1700Component;
  let fixture: ComponentFixture<Pn1700Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pn1700Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pn1700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
