import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LactanteInfoComponent } from './lactante-info.component';

describe('LactanteInfoComponent', () => {
  let component: LactanteInfoComponent;
  let fixture: ComponentFixture<LactanteInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LactanteInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LactanteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
