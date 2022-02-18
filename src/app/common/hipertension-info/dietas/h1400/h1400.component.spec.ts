import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1400Component } from './h1400.component';

describe('H1400Component', () => {
  let component: H1400Component;
  let fixture: ComponentFixture<H1400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H1400Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H1400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
