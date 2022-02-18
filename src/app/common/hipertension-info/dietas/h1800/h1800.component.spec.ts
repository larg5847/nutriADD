import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1800Component } from './h1800.component';

describe('H1800Component', () => {
  let component: H1800Component;
  let fixture: ComponentFixture<H1800Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H1800Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H1800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
