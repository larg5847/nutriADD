import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipertensionMenusSelectComponent } from './hipertension-menus-select.component';

describe('HipertensionMenusSelectComponent', () => {
  let component: HipertensionMenusSelectComponent;
  let fixture: ComponentFixture<HipertensionMenusSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipertensionMenusSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HipertensionMenusSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
