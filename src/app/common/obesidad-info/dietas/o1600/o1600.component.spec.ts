import { ComponentFixture, TestBed } from '@angular/core/testing';

import { O1600Component } from './o1600.component';

describe('O1600Component', () => {
  let component: O1600Component;
  let fixture: ComponentFixture<O1600Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ O1600Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(O1600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
