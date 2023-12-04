import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lr-description',
  templateUrl: './lr-description.component.html',
  styleUrls: ['./lr-description.component.scss']
})
export class LrDescriptionComponent {
  @Input() descriptionText!: string;
}
