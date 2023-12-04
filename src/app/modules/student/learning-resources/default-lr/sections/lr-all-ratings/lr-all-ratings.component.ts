import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lr-all-ratings',
  templateUrl: './lr-all-ratings.component.html',
  styleUrls: ['./lr-all-ratings.component.scss']
})
export class LrAllRatingsComponent {
  @Input() ratingsPercentages!: number[];
  averageRating: number = 0;

  ngOnInit() {
    this.averageRating = this.calculateAverage(this.ratingsPercentages);
  }

  calculateAverage(arr: number[]): number {
    const weightedSum = arr.reduce((acc, val, idx) => acc + val * (arr.length - idx), 0);
    const average = weightedSum / 100;
    return average;
  }

}