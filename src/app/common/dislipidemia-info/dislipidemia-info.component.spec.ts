import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DislipidemiaInfoComponent } from './dislipidemia-info.component';

describe('DislipidemiaInfoComponent', () => {
  let component: DislipidemiaInfoComponent;
  let fixture: ComponentFixture<DislipidemiaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DislipidemiaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DislipidemiaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
