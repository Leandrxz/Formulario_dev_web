import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFormHeaderComponent } from './patient-form-header.component';

describe('PatientFormHeaderComponent', () => {
  let component: PatientFormHeaderComponent;
  let fixture: ComponentFixture<PatientFormHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientFormHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientFormHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
