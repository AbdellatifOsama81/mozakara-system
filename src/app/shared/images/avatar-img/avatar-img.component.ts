import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-avatar-img',
  templateUrl: './avatar-img.component.html',
  styleUrls: ['./avatar-img.component.scss']
})
export class AvatarImgComponent {
  @Input() imageRelativePath!: string;
  @Input() altText!: string;
  @Input() width!: string;
  @Input() backgroundColor!: string;

  assetsPath = environment.imgAssetsPath;

  ngOnInit() {
    if (!this.backgroundColor)
      this.generateRandomLightColor();
  }

  generateRandomLightColor() {
    const min=170;
    const max=250;
    const red = this.generateRandomNumber(min, max);
    const green = this.generateRandomNumber(min, max);
    const blue = this.generateRandomNumber(min, max);

    this.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }

  generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


}
