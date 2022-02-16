import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D1200Component } from './d1200.component';

describe('D1200Component', () => {
  let component: D1200Component;
  let fixture: ComponentFixture<D1200Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D1200Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D1200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
