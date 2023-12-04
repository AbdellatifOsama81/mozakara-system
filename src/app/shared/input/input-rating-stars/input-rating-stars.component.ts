import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-rating-stars',
  templateUrl: './input-rating-stars.component.html',
  styleUrls: ['./input-rating-stars.component.scss']
})
export class InputRatingStarsComponent {
  currentRate = 0;
  hoverRate = 0;
  @Output() rating = new EventEmitter<number>();


  onMouseEnter(id: number) {
    this.hoverRate = id;
  }
  onMouseLeave() {
    this.hoverRate = 0;
  }
  onClick(id: number) {
    this.currentRate = id;
    this.rating.emit(this.currentRate);
    this.hoverRate = 0;
  }

  isFilled(id: number) {
    if (this.hoverRate > 0)
      return id <= this.hoverRate;
    return id <= this.currentRate;
  }

}