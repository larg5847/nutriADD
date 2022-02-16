import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenalInfoComponent } from './renal-info.component';

describe('RenalInfoComponent', () => {
  let component: RenalInfoComponent;
  let fixture: ComponentFixture<RenalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
