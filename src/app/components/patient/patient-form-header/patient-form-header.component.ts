import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-form-header',
  standalone: true,
  imports: [],
  templateUrl: './patient-form-header.component.html',
  styleUrl: './patient-form-header.component.scss',
})
export class PatientFormHeaderComponent {
  public dynamicClockHours: string = '';
  public dynamicClockMinutes: string = '';
  public dynamicClockSeconds: string = '';

  public formDisabled = true;

  /**
   * This function creates a dynamic digital clock to be displayed in the form's header section
   * @returns {void}
   */
  dynamicClock = setInterval((): void => {
    // Taking the Time according to the system's (user) time
    let dateToday: Date = new Date();
    let hours: string = dateToday.getHours().toString();
    let minutes: string = dateToday.getMinutes().toString();
    let seconds: string = dateToday.getSeconds().toString();

    // Adding a 0 in the beggining of the time if < 10, to be like 09
    if (parseInt(hours) < 10) hours = '0' + hours;
    if (parseInt(minutes) < 10) minutes = '0' + minutes;
    if (parseInt(seconds) < 10) seconds = '0' + seconds;

    this.dynamicClockHours = hours;
    this.dynamicClockMinutes = minutes;
    this.dynamicClockSeconds = seconds;
  }, 1000);
}
