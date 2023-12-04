import { Component, Input } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { EnrollmentQuery } from 'src/app/core/interfaces/enrollment/enrollment-query';
import { StudySubject } from 'src/app/core/interfaces/learning-resources/study-subject';

import { EnrollmentService } from 'src/app/shared/services/enrollment/enrollment.service';
import { SubjectService } from 'src/app/shared/services/learning-resources/subject.service';
import { forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CurrentStudentEnrollmentsService } from 'src/app/shared/services/enrollment/current-student-enrollments.service';

@Component({
  selector: 'app-subject-card-grid',
  templateUrl: './subject-card-grid.component.html',
  styleUrls: ['./subject-card-grid.component.scss']
})
export class SubjectCardGridComponent {
  // @Input() view: string = 'grid';
  // @Input() subjects!: StudySubject[];
  // @Input() enrollments!: EnrollmentQuery[];
  /////////////////////////////////////////////

  // constructor(public currentStudentEnrollments: CurrentStudentEnrollmentsService) { }
  // @Input() view: string = 'grid';
  //////////////////////////////////////
  @Input() view: string = 'grid';

  subjects = [
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
  
  // subjects$: Observable<StudySubject[]> | undefined;
  // enrollments$: Observable<EnrollmentQuery[]> | undefined;
  // hardcodedStudentId = '9ec31d07-7f7b-4680-a14f-a449b8ed40d5';

  // constructor(
  //   private _enrollmentService: EnrollmentService,
  //   private _subjectService: SubjectService
  // ) { }

  // ngOnInit() {
  //   this.enrollments$ = this._enrollmentService.getEnrollmentByStudentId(this.hardcodedStudentId).pipe(
  //     map((response: any) => response.data)
  //   );

  //   this.subjects$ = this.enrollments$.pipe(
  //     switchMap((enrollments: EnrollmentQuery[]) => {
  //       const subjectObservables: Observable<StudySubject>[] = enrollments.map(enrollment =>
  //         this.getSubjectById(enrollment.subjectId)
  //       );
  //       return forkJoin(subjectObservables);
  //     })
  //   );
  // }

  // getSubjectById(subjectId: string): Observable<StudySubject> {
  //   return this._subjectService.getSubject(subjectId).pipe(
  //     map((response: any) => response.data[0])
  //   );
  // }
}
