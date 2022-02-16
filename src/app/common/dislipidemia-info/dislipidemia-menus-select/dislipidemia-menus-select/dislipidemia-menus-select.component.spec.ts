import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DislipidemiaMenusSelectComponent } from './dislipidemia-menus-select.component';

describe('DislipidemiaMenusSelectComponent', () => {
  let component: DislipidemiaMenusSelectComponent;
  let fixture: ComponentFixture<DislipidemiaMenusSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DislipidemiaMenusSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DislipidemiaMenusSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
