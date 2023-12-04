import { Component } from '@angular/core';
// import { Observable } from 'rxjs';
import { EnrollmentQuery } from 'src/app/core/interfaces/enrollment/enrollment-query';
import { StudySubject } from 'src/app/core/interfaces/learning-resources/study-subject';
// import { EnrollmentService } from 'src/app/shared/services/enrollment/enrollment.service';
// import { SubjectService } from 'src/app/shared/services/learning-resources/subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  subjects: StudySubject[] = [];
  enrollments!: EnrollmentQuery[];
  // hardcodedStudentId = '9ec31d07-7f7b-4680-a14f-a449b8ed40d5';

  constructor(
    // private _subjectService: SubjectService,
    // private _enrollmentService: EnrollmentService
  ) { }

  ngOnInit() {
    // this.getEnrollments();

    // this.subjects = [
    //   {
    //     "id": "803787c8-79eb-48bd-bf79-72037a3f24a3",
    //     "name": "التفاضل والتكامل",
    //     "description": "يتفاعل الطلاب مع المعلم بالكتابة والصوت وحل الأسئلة والاختبارات",
    //     "studyLevel": "الأول الثانوي"
    //   },
    //   {
    //     "id": "a03787c8-79eb-48bd-bf79-72037a3f24a3",
    //     "name": "التفاضل والتكامل",
    //     "description": "يتفاعل الطلاب مع المعلم بالكتابة والصوت وحل الأسئلة والاختبارات",
    //     "studyLevel": "الأول الثانوي"
    //   },
    //   {
    //     "id": "b03787c8-79eb-48bd-bf79-72037a3f24a3",
    //     "name": "التفاضل والتكامل",
    //     "description": "يتفاعل الطلاب مع المعلم بالكتابة والصوت وحل الأسئلة والاختبارات",
    //     "studyLevel": "الأول الثانوي"
    //   },
    //   {
    //     "id": "c03787c8-79eb-48bd-bf79-72037a3f24a3",
    //     "name": "التفاضل والتكامل",
    //     "description": "يتفاعل الطلاب مع المعلم بالكتابة والصوت وحل الأسئلة والاختبارات",
    //     "studyLevel": "الأول الثانوي"
    //   },
    //   {
    //     "id": "d03787c8-79eb-48bd-bf79-72037a3f24a3",
    //     "name": "التفاضل والتكامل",
    //     "description": "يتفاعل الطلاب مع المعلم بالكتابة والصوت وحل الأسئلة والاختبارات",
    //     "studyLevel": "الأول الثانوي"
    //   },
    //   {
    //     "id": "ad3787c8-79eb-48bd-bf79-72037a3f24a3",
    //     "name": "التفاضل والتكامل",
    //     "description": "يتفاعل الطلاب مع المعلم بالكتابة والصوت وحل الأسئلة والاختبارات",
    //     "studyLevel": "الأول الثانوي"
    //   },
    //   {
    //     "id": "b0d787c8-79eb-48bd-bf79-72037a3f24a3",
    //     "name": "التفاضل والتكامل",
    //     "description": "يتفاعل الطلاب مع المعلم بالكتابة والصوت وحل الأسئلة والاختبارات",
    //     "studyLevel": "الأول الثانوي"
    //   },
    // ]
  }
  // getEnrollments() {
  //   this._enrollmentService.getEnrollmentByStudentId(this.hardcodedStudentId).subscribe(
  //     {
  //       next: (response: any) => {
  //         this.enrollments = response.data;
  //         this.getStudentSubjects();
  //         // console.log(this.enrollments);
  //       }
  //     }
  //   );
  // }

  // getStudentSubjects() {
  //   this.enrollments.forEach(enrollment => {
  //     this.getSubjectById(enrollment.subjectId).subscribe(
  //       {
  //         next: (response: any) => {
  //           this.subjects.push(response.data[0]);
  //         }
  //       });
  //   });
  // }

  // getSubjectById(subjectId: string): Observable<StudySubject[]> {
  //   return this._subjectService.getSubject(subjectId);
  // }
}
