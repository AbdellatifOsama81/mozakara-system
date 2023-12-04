import { Component, Input, OnInit } from '@angular/core';
import { Topic } from 'src/app/core/interfaces/learning-resources/topic';
import { Unit } from 'src/app/core/interfaces/learning-resources/unit';

@Component({
  selector: 'app-unit-plan',
  templateUrl: './unit-plan.component.html',
  styleUrls: ['./unit-plan.component.scss']
})
export class UnitPlanComponent {
  expanded = false;
  @Input() unit!: Unit;

  topics: Topic[] = [
    {
      id: '1',
      name: 'الدرس الأول',
      description: 'في هذا الدرس مفاهيم مهمة تؤسس الطالب للمادة',
      minutesAggregate: 15,
      prerequisites: [],
      unit: 'الوحدة الأولى',
      subjectName: 'الرياضيات',
      practiceQuestionsNumber: 8,
      practiceDefaultMinutes: 40,
      practiceQuestionMark: 3,
    },
    {
      id: '5',
      name: 'الدرس الثاني',
      description: 'في هذا الدرس مفاهيم مهمة تؤسس الطالب للمادة',
      minutesAggregate: 25,
      prerequisites: [],
      unit: 'الوحدة الأولى',
      subjectName: 'الرياضيات',
      practiceQuestionsNumber: 8,
      practiceDefaultMinutes: 40,
      practiceQuestionMark: 3,
    }
  ]

  rotateButton() {
    this.expanded = !this.expanded;
  }
}
