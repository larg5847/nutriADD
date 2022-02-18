import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D1700Component } from './d1700.component';

describe('D1700Component', () => {
  let component: D1700Component;
  let fixture: ComponentFixture<D1700Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D1700Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D1700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
