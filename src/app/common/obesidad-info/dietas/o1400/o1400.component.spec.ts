import { ComponentFixture, TestBed } from '@angular/core/testing';

import { O1400Component } from './o1400.component';

describe('O1400Component', () => {
  let component: O1400Component;
  let fixture: ComponentFixture<O1400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ O1400Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(O1400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
