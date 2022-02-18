import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D1500Component } from './d1500.component';

describe('D1500Component', () => {
  let component: D1500Component;
  let fixture: ComponentFixture<D1500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D1500Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D1500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
