import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D1300Component } from './d1300.component';

describe('D1300Component', () => {
  let component: D1300Component;
  let fixture: ComponentFixture<D1300Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D1300Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D1300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
