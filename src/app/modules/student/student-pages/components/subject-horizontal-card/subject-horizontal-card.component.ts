import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-subject-horizontal-card',
  templateUrl: './subject-horizontal-card.component.html',
  styleUrls: ['./subject-horizontal-card.component.scss']
})
export class SubjectHorizontalCardComponent {
  assetsPath = '../../../../../../assets/images/student/';
  expanded = false;
  largeScreen=false;

  rotateButton() {
    this.expanded = !this.expanded;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.largeScreen = window.innerWidth > 922;

  }

}
