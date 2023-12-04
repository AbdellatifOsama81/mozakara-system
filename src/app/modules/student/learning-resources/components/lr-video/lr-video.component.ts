import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lr-video',
  templateUrl: './lr-video.component.html',
  styleUrls: ['./lr-video.component.scss']
})
export class LrVideoComponent {
  @Input() lrLink!:string;
  assetsPath = environment.imgAssetsPath;
}
