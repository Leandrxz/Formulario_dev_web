import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientFormComponent } from './components/patient/patient-form/patient-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PatientFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
