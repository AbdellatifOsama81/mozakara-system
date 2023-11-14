import { Component, HostListener, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-subject-horizontal-card',
  templateUrl: './subject-horizontal-card.component.html',
  styleUrls: ['./subject-horizontal-card.component.scss']
})
export class SubjectHorizontalCardComponent {
  @Input() progress: number = 0;

  assetsPath = environment.imgAssetsPath;
  expanded = false;
  // largeScreen=false;

  rotateButton() {
    this.expanded = !this.expanded;
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event): void {
  //   this.largeScreen = window.innerWidth > 922;

  // }

}
