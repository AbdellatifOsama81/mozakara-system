import { Component } from '@angular/core';
import { StudySubject } from 'src/app/core/interfaces/learning-resources/study-subject';
import { SubjectService } from 'src/app/shared/services/learning-resources/subject.service';

@Component({
  selector: 'app-in-progress-subjects',
  templateUrl: './in-progress-subjects.component.html',
  styleUrls: ['./in-progress-subjects.component.scss']
})
export class InProgressSubjectsComponent {
  currView: string = 'horizontal';


  subjects!: StudySubject[];

  constructor(private _subjectService: SubjectService) { }

  ngOnInit() {
    this.subjects = [
      {
        "id": "803787c8-79eb-48bd-bf79-72037a3f24a3",
        "name": "التفاضل والتكامل",
        "description": "يتفاعل الطلاب مع المعلم بالكتابة والصوت وحل الأسئلة والاختبارات",
        "studyLevel": "الأول الثانوي"
      },
      {
        "id": "a03787c8-79eb-48bd-bf79-72037a3f24a3",
        "name": "التفاضل والتكامل",
        "description": "يتفاعل الطلاب مع المعلم بالكتابة والصوت وحل الأسئلة والاختبارات",
        "studyLevel": "الأول الثانوي"
      },
      {
        "id": "b03787c8-79eb-48bd-bf79-72037a3f24a3",
        "name": "التفاضل والتكامل",
        "description": "يتفاعل الطلاب مع المعلم بالكتابة والصوت وحل الأسئلة والاختبارات",
        "studyLevel": "الأول الثانوي"
      },
      {
        "id": "c03787c8-79eb-48bd-bf79-72037a3f24a3",
        "name": "التفاضل والتكامل",
        "description": "يتفاعل الطلاب مع المعلم بالكتابة والصوت وحل الأسئلة والاختبارات",
        "studyLevel": "الأول الثانوي"
      },
      {
        "id": "d03787c8-79eb-48bd-bf79-72037a3f24a3",
        "name": "التفاضل والتكامل",
        "description": "يتفاعل الطلاب مع المعلم بالكتابة والصوت وحل الأسئلة والاختبارات",
        "studyLevel": "الأول الثانوي"
      },
      {
        "id": "ad3787c8-79eb-48bd-bf79-72037a3f24a3",
        "name": "التفاضل والتكامل",
        "description": "يتفاعل الطلاب مع المعلم بالكتابة والصوت وحل الأسئلة والاختبارات",
        "studyLevel": "الأول الثانوي"
      },
      {
        "id": "b0d787c8-79eb-48bd-bf79-72037a3f24a3",
        "name": "التفاضل والتكامل",
        "description": "يتفاعل الطلاب مع المعلم بالكتابة والصوت وحل الأسئلة والاختبارات",
        "studyLevel": "الأول الثانوي"
      },
    ]
    // this.getSubjects();
  }

  setCurrView(currView: string) {
    this.currView = currView;
  }

  getSubjects() {
    this._subjectService.getSubject().subscribe(
      {
        next: (response: any) => {
          this.subjects = response.data;
          console.log(this.subjects);
        }
      }
    );
  }
}
