import { Component } from '@angular/core';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrls: ['./learning-resources.component.scss']
})
export class LearningResourcesComponent {
  unitName: string = 'الوحدة الثالثة';
  topicName: string = 'الدرس الأول';
  lrName: string = 'اشتقاق مقلوب الدوال المثلثية';

  subject = {
    name: 'الرياضيات',
    time: 6,
    studyLevel: "الصف الثالث الثانوي",
    numberOfStudents: 69419618,
    language: 'العربية'
  }

}
