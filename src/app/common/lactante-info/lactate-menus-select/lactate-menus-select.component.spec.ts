import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LactateMenusSelectComponent } from './lactate-menus-select.component';

describe('LactateMenusSelectComponent', () => {
  let component: LactateMenusSelectComponent;
  let fixture: ComponentFixture<LactateMenusSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LactateMenusSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LactateMenusSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
