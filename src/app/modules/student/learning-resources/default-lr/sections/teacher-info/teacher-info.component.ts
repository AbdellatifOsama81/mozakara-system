import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.scss']
})
export class TeacherInfoComponent {
  @Input() teacherName!: string;
  @Input() teacherRating!: number;
  @Input() numberOfRatings!: number;
  @Input() teacherImageRelativePath!: string;

  assetsPath = environment.imgAssetsPath;

}
