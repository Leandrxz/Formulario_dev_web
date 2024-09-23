import { Component } from '@angular/core';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { HealthInfoComponent } from './health-info/health-info.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [
    ContactInfoComponent,
    EmergencyContactComponent,
    HealthInfoComponent,
    PersonalInfoComponent,
  ],
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.scss',
})
export class PatientFormComponent {}
