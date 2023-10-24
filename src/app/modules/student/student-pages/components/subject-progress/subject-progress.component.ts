import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subject-progress',
  templateUrl: './subject-progress.component.html',
  styleUrls: ['./subject-progress.component.scss']
})
export class SubjectProgressComponent {
  @Input() progress: number = 0;
}
