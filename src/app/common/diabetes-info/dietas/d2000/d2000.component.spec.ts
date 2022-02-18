import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D2000Component } from './d2000.component';

describe('D2000Component', () => {
  let component: D2000Component;
  let fixture: ComponentFixture<D2000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D2000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
