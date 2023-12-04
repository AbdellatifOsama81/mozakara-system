import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subject-plan-card',
  templateUrl: './subject-plan-card.component.html',
  styleUrls: ['./subject-plan-card.component.scss']
})
export class SubjectPlanCardComponent {
  @Input() subject!:any;
}
