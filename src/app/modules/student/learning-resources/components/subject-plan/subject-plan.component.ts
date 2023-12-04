import { Component, Input } from '@angular/core';
import { Unit } from 'src/app/core/interfaces/learning-resources/unit';

@Component({
  selector: 'app-subject-plan',
  templateUrl: './subject-plan.component.html',
  styleUrls: ['./subject-plan.component.scss']
})
export class SubjectPlanComponent {
  units: Unit[] = [
    {
      id: '1',
      name: 'الوحدة الأولى',
      description: 'يتفاعل الطلاب مع المعلم بالكتابة والصوت وحل الأسئلة والاختبارات .. ويصل للمعلم تقرير كامل عن تفاعلهم يتفاعل الطلاب مع المعلم بالكتابة والصوت وحل الأسئلة والاختبارات .. ويصل للمعلم',
      minutesAggregate: 30,
      prerequisites: [],
      subject: 'الرياضيات',
    },
    {
      id: '2',
      name: 'الوحدة الثانية',
      description: 'يتفاعل الطلاب مع المعلم بالكتابة والصوت وحل الأسئلة والاختبارات .. ويصل للمعلم تقرير كامل عن تفاعلهم يتفاعل الطلاب مع المعلم بالكتابة والصوت وحل الأسئلة والاختبارات .. ويصل للمعلم',
      minutesAggregate: 40,
      prerequisites: ['الوحدة الأولى'],
      subject: 'الرياضيات',
    }
  ];
}
