import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D1800Component } from './d1800.component';

describe('D1800Component', () => {
  let component: D1800Component;
  let fixture: ComponentFixture<D1800Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D1800Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D1800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
