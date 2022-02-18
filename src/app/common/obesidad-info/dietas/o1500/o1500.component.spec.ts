import { ComponentFixture, TestBed } from '@angular/core/testing';

import { O1500Component } from './o1500.component';

describe('O1500Component', () => {
  let component: O1500Component;
  let fixture: ComponentFixture<O1500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ O1500Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(O1500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
