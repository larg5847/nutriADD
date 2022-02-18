import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pn1800Component } from './pn1800.component';

describe('Pn1800Component', () => {
  let component: Pn1800Component;
  let fixture: ComponentFixture<Pn1800Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pn1800Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pn1800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
