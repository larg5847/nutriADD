import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D1600Component } from './d1600.component';

describe('D1600Component', () => {
  let component: D1600Component;
  let fixture: ComponentFixture<D1600Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D1600Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D1600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
