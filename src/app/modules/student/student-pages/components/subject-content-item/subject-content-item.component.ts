import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-subject-content-item',
  templateUrl: './subject-content-item.component.html',
  styleUrls: ['./subject-content-item.component.scss']
})
export class SubjectContentItemComponent {
  assetsPath = environment.imgAssetsPath + '/student';
}
