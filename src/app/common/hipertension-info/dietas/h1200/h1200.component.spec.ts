import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1200Component } from './h1200.component';

describe('H1200Component', () => {
  let component: H1200Component;
  let fixture: ComponentFixture<H1200Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H1200Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H1200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
