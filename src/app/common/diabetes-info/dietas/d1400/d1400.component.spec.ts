import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D1400Component } from './d1400.component';

describe('D1400Component', () => {
  let component: D1400Component;
  let fixture: ComponentFixture<D1400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D1400Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D1400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
