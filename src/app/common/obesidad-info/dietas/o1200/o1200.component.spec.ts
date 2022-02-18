import { ComponentFixture, TestBed } from '@angular/core/testing';

import { O1200Component } from './o1200.component';

describe('O1200Component', () => {
  let component: O1200Component;
  let fixture: ComponentFixture<O1200Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ O1200Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(O1200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
