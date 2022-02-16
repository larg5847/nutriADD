import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipertensionInfoComponent } from './hipertension-info.component';

describe('HipertensionInfoComponent', () => {
  let component: HipertensionInfoComponent;
  let fixture: ComponentFixture<HipertensionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipertensionInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HipertensionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
