import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenalMenusSelectComponent } from './renal-menus-select.component';

describe('RenalMenusSelectComponent', () => {
  let component: RenalMenusSelectComponent;
  let fixture: ComponentFixture<RenalMenusSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenalMenusSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenalMenusSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
