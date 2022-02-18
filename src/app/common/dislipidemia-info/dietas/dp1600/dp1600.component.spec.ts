import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dp1600Component } from './dp1600.component';

describe('Dp1600Component', () => {
  let component: Dp1600Component;
  let fixture: ComponentFixture<Dp1600Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dp1600Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dp1600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
