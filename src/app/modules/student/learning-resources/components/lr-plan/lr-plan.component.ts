import { Component, Input } from '@angular/core';
import { LearningResource } from 'src/app/core/interfaces/learning-resources/learning-resource';

@Component({
  selector: 'app-lr-plan',
  templateUrl: './lr-plan.component.html',
  styleUrls: ['./lr-plan.component.scss']
})
export class LrPlanComponent {
  @Input() learningResource!: LearningResource;

  lrDuration!: Date;
  millisecondsInMinute = 60000;

  ngOnInit(){
    this.lrDuration = new Date(this.learningResource.defaultMinutes * this.millisecondsInMinute);
  }

}
