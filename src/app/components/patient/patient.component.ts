import { Component } from '@angular/core';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientFormHeaderComponent } from './patient-form-header/patient-form-header.component';


@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [PatientFormComponent, PatientFormHeaderComponent],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss',
})
export class PatientComponent {}
