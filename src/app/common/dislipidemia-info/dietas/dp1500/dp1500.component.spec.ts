import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dp1500Component } from './dp1500.component';

describe('Dp1500Component', () => {
  let component: Dp1500Component;
  let fixture: ComponentFixture<Dp1500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dp1500Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dp1500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
