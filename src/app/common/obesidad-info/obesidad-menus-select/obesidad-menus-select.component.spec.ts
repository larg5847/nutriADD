import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObesidadMenusSelectComponent } from './obesidad-menus-select.component';

describe('ObesidadMenusSelectComponent', () => {
  let component: ObesidadMenusSelectComponent;
  let fixture: ComponentFixture<ObesidadMenusSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObesidadMenusSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObesidadMenusSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
