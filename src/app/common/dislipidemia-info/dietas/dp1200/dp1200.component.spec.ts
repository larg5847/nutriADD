import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dp1200Component } from './dp1200.component';

describe('Dp1200Component', () => {
  let component: Dp1200Component;
  let fixture: ComponentFixture<Dp1200Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dp1200Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dp1200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
