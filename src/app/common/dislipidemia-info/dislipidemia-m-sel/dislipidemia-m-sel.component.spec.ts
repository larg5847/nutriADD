import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DislipidemiaMSelComponent } from './dislipidemia-m-sel.component';

describe('DislipidemiaMSelComponent', () => {
  let component: DislipidemiaMSelComponent;
  let fixture: ComponentFixture<DislipidemiaMSelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DislipidemiaMSelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DislipidemiaMSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
