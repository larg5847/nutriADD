import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1700Component } from './h1700.component';

describe('H1700Component', () => {
  let component: H1700Component;
  let fixture: ComponentFixture<H1700Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H1700Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H1700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
