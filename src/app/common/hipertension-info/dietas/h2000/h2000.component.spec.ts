import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H2000Component } from './h2000.component';

describe('H2000Component', () => {
  let component: H2000Component;
  let fixture: ComponentFixture<H2000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H2000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(H2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
