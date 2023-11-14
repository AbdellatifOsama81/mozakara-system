import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-avatar-img',
  templateUrl: './avatar-img.component.html',
  styleUrls: ['./avatar-img.component.scss']
})
export class AvatarImgComponent {
  @Input() imageRealtivePath!:string;
  @Input() altText!:string;
  @Input() width!:string;
  @Input() backgroundColor:string = "$primary";

  assetsPath = environment.imgAssetsPath;
  
}
