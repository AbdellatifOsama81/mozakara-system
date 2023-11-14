import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-subject-vertical-card',
  templateUrl: './subject-vertical-card.component.html',
  styleUrls: ['./subject-vertical-card.component.scss']
})
export class SubjectVerticalCardComponent {
  @Input() showProgress: boolean = false;
  @Input() progress: number = 0;

  assetsPath = environment.imgAssetsPath;
}
