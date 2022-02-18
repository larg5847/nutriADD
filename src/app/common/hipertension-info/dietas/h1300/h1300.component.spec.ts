import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1300Component } from './h1300.component';

describe('H1300Component', () => {
  let component: H1300Component;
  let fixture: ComponentFixture<H1300Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H1300Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H1300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
