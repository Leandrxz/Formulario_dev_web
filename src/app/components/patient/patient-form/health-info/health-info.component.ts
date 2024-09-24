import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-health-info',
  standalone: true,
  imports: [],
  templateUrl: './health-info.component.html',
  styleUrl: './health-info.component.scss',
})
export class HealthInfoComponent {
  public hasAllergies: string = 'no'; // Standard Value
  public showAllergiesInput = false;

  /**
   * This method identifies if the option for the allergies is yes, if it is, open the input field
   * @param {string} value
   */
  public toggleAllergiesInput(value: string): void {
    this.showAllergiesInput = value === 'yes';
  }
}
