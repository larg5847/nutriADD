import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenatalInfoComponent } from './prenatal-info.component';

describe('PrenatalInfoComponent', () => {
  let component: PrenatalInfoComponent;
  let fixture: ComponentFixture<PrenatalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrenatalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenatalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
