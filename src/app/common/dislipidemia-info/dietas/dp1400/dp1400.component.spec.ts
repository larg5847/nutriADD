import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dp1400Component } from './dp1400.component';

describe('Dp1400Component', () => {
  let component: Dp1400Component;
  let fixture: ComponentFixture<Dp1400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dp1400Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dp1400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
