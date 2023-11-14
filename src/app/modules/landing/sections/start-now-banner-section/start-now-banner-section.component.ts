import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-start-now-banner-section',
  templateUrl: './start-now-banner-section.component.html',
  styleUrls: ['./start-now-banner-section.component.scss']
})
export class StartNowBannerSectionComponent {
  assetsPath = environment.imgAssetsPath;
}
