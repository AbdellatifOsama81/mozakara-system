import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lr-subject-summary',
  templateUrl: './lr-subject-summary.component.html',
  styleUrls: ['./lr-subject-summary.component.scss']
})
export class LrSubjectSummaryComponent {
  @Input() subjectTime!:number;
  @Input() studyLevel!:string;
  @Input() numberOfStudents!:number;
  @Input() language!:string;

}
