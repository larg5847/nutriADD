import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalPatologiasComponent } from './principal-patologias.component';

describe('PrincipalPatologiasComponent', () => {
  let component: PrincipalPatologiasComponent;
  let fixture: ComponentFixture<PrincipalPatologiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalPatologiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalPatologiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
