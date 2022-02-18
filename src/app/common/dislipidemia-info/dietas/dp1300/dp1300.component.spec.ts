import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dp1300Component } from './dp1300.component';

describe('Dp1300Component', () => {
  let component: Dp1300Component;
  let fixture: ComponentFixture<Dp1300Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dp1300Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dp1300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
