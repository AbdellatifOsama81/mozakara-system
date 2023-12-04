import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss']
})
export class RatingStarsComponent implements OnInit {
  @Input() rating: number = 0;
  starsWidths: string[] = [];

  ngOnInit() {
    for (let i = 1; i <= 5; i++) {
      if (this.rating >= 1) {
        this.starsWidths.push('100%');
        this.rating -= 1;
      }
      else {
        this.starsWidths.push(this.rating * 100 + '%');
        this.rating = 0;
      }
    }
  }
}
