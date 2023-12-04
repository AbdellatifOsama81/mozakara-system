import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lr-info',
  templateUrl: './lr-info.component.html',
  styleUrls: ['./lr-info.component.scss']
})
export class LrInfoComponent {
  @Input() lrName!:string;
  @Input() topicName!:string;
  @Input() unitName!:string;
  @Input() subjectName!:string;
}
