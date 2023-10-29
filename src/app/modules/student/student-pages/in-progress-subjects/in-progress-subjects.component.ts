import { Component } from '@angular/core';

@Component({
  selector: 'app-in-progress-subjects',
  templateUrl: './in-progress-subjects.component.html',
  styleUrls: ['./in-progress-subjects.component.scss']
})
export class InProgressSubjectsComponent {
  subjects = [1, 2, 3, 4, 5, 6]//dummy
  // currView: string = 'grid';
  currView: string = 'horizontal';

  setCurrView(currView: string) {
    this.currView = currView;
  }
}
