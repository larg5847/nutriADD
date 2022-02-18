import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dp2000Component } from './dp2000.component';

describe('Dp2000Component', () => {
  let component: Dp2000Component;
  let fixture: ComponentFixture<Dp2000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dp2000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dp2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
