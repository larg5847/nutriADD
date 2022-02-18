import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pn2200Component } from './pn2200.component';

describe('Pn2200Component', () => {
  let component: Pn2200Component;
  let fixture: ComponentFixture<Pn2200Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pn2200Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pn2200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
