import { ComponentFixture, TestBed } from '@angular/core/testing';

import { O2000Component } from './o2000.component';

describe('O2000Component', () => {
  let component: O2000Component;
  let fixture: ComponentFixture<O2000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ O2000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(O2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
