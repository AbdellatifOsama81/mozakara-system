import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lr-image',
  templateUrl: './lr-image.component.html',
  styleUrls: ['./lr-image.component.scss']
})
export class LrImageComponent {
  @Input() lrLink!: string;
  assetsPath = environment.imgAssetsPath;
}
