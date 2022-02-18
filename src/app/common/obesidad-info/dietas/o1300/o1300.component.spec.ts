import { ComponentFixture, TestBed } from '@angular/core/testing';

import { O1300Component } from './o1300.component';

describe('O1300Component', () => {
  let component: O1300Component;
  let fixture: ComponentFixture<O1300Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ O1300Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(O1300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
