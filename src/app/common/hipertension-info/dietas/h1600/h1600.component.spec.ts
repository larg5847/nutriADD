import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1600Component } from './h1600.component';

describe('H1600Component', () => {
  let component: H1600Component;
  let fixture: ComponentFixture<H1600Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H1600Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H1600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
