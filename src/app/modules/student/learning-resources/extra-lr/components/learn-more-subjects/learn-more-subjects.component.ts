import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-more-subjects',
  templateUrl: './learn-more-subjects.component.html',
  styleUrls: ['./learn-more-subjects.component.scss']
})
export class LearnMoreSubjectsComponent {
  learnMoreSubjects = [
    {
      imgName:'learn-more-1.svg',
      name:'الجبر',
      studyLevel:'الصف الثاني الإعدادي',
      description:'يتفاعل الطلاب مع المعلم بالكتابة والصوت وحل الأسئلة والاختبارات',
      rating:4.5,
      views:5000,
      numberOfStudents:1233
    },
    {
      imgName:'learn-more-2.svg',
      name:'الهندسة',
      studyLevel:'الصف الثاني الإعدادي',
      description:'يتفاعل الطلاب مع المعلم بالكتابة والصوت وحل الأسئلة والاختبارات',
      rating:3.8,
      views:4700,
      numberOfStudents:2033
    },
    {
      imgName:'learn-more-3.svg',
      name:'العلوم',
      studyLevel:'الصف الثاني الإعدادي',
      description:'يتفاعل الطلاب مع المعلم بالكتابة والصوت وحل الأسئلة والاختبارات',
      rating:4.9,
      views:3000,
      numberOfStudents:2300
    },
  ]
}
