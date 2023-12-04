import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subject-info',
  templateUrl: './subject-info.component.html',
  styleUrls: ['./subject-info.component.scss']
})
export class SubjectInfoComponent {
  @Input() price!: number;
  @Input() studyLevel!: string;
  @Input() subjectName!: string;
  @Input() subjectDescription!: string;
}
