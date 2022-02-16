import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenatalMenuSelectComponent } from './prenatal-menu-select.component';

describe('PrenatalMenuSelectComponent', () => {
  let component: PrenatalMenuSelectComponent;
  let fixture: ComponentFixture<PrenatalMenuSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrenatalMenuSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenatalMenuSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
