import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subject-card-grid',
  templateUrl: './subject-card-grid.component.html',
  styleUrls: ['./subject-card-grid.component.scss']
})
export class SubjectCardGridComponent {
  @Input() view: string = 'grid';
}
