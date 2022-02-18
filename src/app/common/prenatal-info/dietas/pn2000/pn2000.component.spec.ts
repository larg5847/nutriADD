import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pn2000Component } from './pn2000.component';

describe('Pn2000Component', () => {
  let component: Pn2000Component;
  let fixture: ComponentFixture<Pn2000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pn2000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pn2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
