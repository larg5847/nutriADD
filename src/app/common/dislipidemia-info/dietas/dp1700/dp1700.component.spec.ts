import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dp1700Component } from './dp1700.component';

describe('Dp1700Component', () => {
  let component: Dp1700Component;
  let fixture: ComponentFixture<Dp1700Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dp1700Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dp1700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
