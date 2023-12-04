import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing-subject-card',
  templateUrl: './landing-subject-card.component.html',
  styleUrls: ['./landing-subject-card.component.scss']
})
export class LandingSubjectCardComponent {
  @Input() price!: number;
  @Input() imageRelativePath!: string;
  @Input() subjectName!: string;
  @Input() subjectDescription!: string;
  @Input() subjectStudyLevel!: string;
  @Input() subjectRating!: number;
  @Input() subjectViews!: number;
  @Input() subjectNumberOfStudents!: number;


  assetsPath = environment.imgAssetsPath;
}
