import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-follow-teacher-card',
  templateUrl: './follow-teacher-card.component.html',
  styleUrls: ['./follow-teacher-card.component.scss']
})
export class FollowTeacherCardComponent {
  @Input() teacher!:any;
  assetsPath = environment.imgAssetsPath;
}
