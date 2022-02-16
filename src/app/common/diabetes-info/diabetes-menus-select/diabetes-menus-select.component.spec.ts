import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesMenusSelectComponent } from './diabetes-menus-select.component';

describe('DiabetesMenusSelectComponent', () => {
  let component: DiabetesMenusSelectComponent;
  let fixture: ComponentFixture<DiabetesMenusSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetesMenusSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabetesMenusSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
