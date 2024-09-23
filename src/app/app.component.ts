import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientFormComponent } from './components/patient/patient-form/patient-form.component';
import { PatientFormHeaderComponent } from './components/patient/patient-form-header/patient-form-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PatientFormComponent, PatientFormHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
