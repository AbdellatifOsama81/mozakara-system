import { Component, HostListener, Input } from '@angular/core';
import { StudySubject } from 'src/app/core/interfaces/learning-resources/study-subject';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-subject-horizontal-card',
  templateUrl: './subject-horizontal-card.component.html',
  styleUrls: ['./subject-horizontal-card.component.scss']
})
export class SubjectHorizontalCardComponent {
  @Input() progress: number = 0;
  @Input() subject!: StudySubject;

  assetsPath = environment.imgAssetsPath;
  expanded = false;

  rotateButton() {
    this.expanded = !this.expanded;
  }
}
