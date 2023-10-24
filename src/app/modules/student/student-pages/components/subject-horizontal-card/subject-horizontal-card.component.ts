import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-horizontal-card',
  templateUrl: './subject-horizontal-card.component.html',
  styleUrls: ['./subject-horizontal-card.component.scss']
})
export class SubjectHorizontalCardComponent {
  assetsPath = '../../../../../../assets/images/student/';
  expanded = false;

  rotateButton() {
    this.expanded = !this.expanded;
  }
}
