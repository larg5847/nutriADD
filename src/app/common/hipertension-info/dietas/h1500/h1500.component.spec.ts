import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1500Component } from './h1500.component';

describe('H1500Component', () => {
  let component: H1500Component;
  let fixture: ComponentFixture<H1500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H1500Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H1500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
