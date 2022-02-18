import { ComponentFixture, TestBed } from '@angular/core/testing';

import { O1700Component } from './o1700.component';

describe('O1700Component', () => {
  let component: O1700Component;
  let fixture: ComponentFixture<O1700Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ O1700Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(O1700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
