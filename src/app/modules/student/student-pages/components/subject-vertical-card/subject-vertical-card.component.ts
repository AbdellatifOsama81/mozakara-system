import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subject-vertical-card',
  templateUrl: './subject-vertical-card.component.html',
  styleUrls: ['./subject-vertical-card.component.scss']
})
export class SubjectVerticalCardComponent {
  @Input() showProgress: boolean = false;
  assetsPath = '../../../../../../assets/images/student/';
}
