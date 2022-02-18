import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dp1800Component } from './dp1800.component';

describe('Dp1800Component', () => {
  let component: Dp1800Component;
  let fixture: ComponentFixture<Dp1800Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dp1800Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dp1800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
