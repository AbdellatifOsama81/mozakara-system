import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-heading',
  templateUrl: './side-heading.component.html',
  styleUrls: ['./side-heading.component.scss']
})
export class SideHeadingComponent {
  @Input() label!: string;
  @Input() title!: string;
}
