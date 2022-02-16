import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesInfoComponent } from './diabetes-info.component';

describe('DiabetesInfoComponent', () => {
  let component: DiabetesInfoComponent;
  let fixture: ComponentFixture<DiabetesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabetesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
