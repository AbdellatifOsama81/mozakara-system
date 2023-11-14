import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing-subject-card',
  templateUrl: './landing-subject-card.component.html',
  styleUrls: ['./landing-subject-card.component.scss']
})
export class LandingSubjectCardComponent {
  @Input() price: number = 0;

  assetsPath = environment.imgAssetsPath;
}
