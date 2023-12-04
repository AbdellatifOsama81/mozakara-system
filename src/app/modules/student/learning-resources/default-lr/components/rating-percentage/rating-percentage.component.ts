import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-percentage',
  templateUrl: './rating-percentage.component.html',
  styleUrls: ['./rating-percentage.component.scss']
})
export class RatingPercentageComponent {
  @Input() percentage: number = 0;
  @Input() rating!: number;
}
