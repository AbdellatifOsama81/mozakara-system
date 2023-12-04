import { Injectable } from '@angular/core';
import { Observable, forkJoin, from, zip } from 'rxjs';
import { EnrollmentQuery } from 'src/app/core/interfaces/enrollment/enrollment-query';
import { StudySubject } from 'src/app/core/interfaces/learning-resources/study-subject';
import { SubjectService } from 'src/app/shared/services/learning-resources/subject.service';
import { map, switchMap } from 'rxjs/operators';
import { EnrollmentService } from './enrollment.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentStudentEnrollmentsService {
  subjects$: Observable<StudySubject[]> | undefined;
  enrollments$: Observable<EnrollmentQuery[]> | undefined;
  hardcodedStudentId = '9ec31d07-7f7b-4680-a14f-a449b8ed40d5';
  subjectsAndEnrollments$: Observable<{ subject: StudySubject, enrollment: EnrollmentQuery }> | undefined;


  constructor(
    private _enrollmentService: EnrollmentService,
    private _subjectService: SubjectService
  ) {
    this.initData();
  }

  private initData() {
    this.enrollments$ = this._enrollmentService.getEnrollmentByStudentId(this.hardcodedStudentId).pipe(
      map((response: any) => response.data)
    );

    this.subjects$ = this.enrollments$.pipe(
      switchMap((enrollments: EnrollmentQuery[]) => {
        const subjectObservables: Observable<StudySubject>[] = enrollments.map(enrollment =>
          this.getSubjectById(enrollment.subjectId)
        );
        return forkJoin(subjectObservables);
      })
    );
  }

  private getSubjectById(subjectId: string): Observable<StudySubject> {
    return this._subjectService.getSubject(subjectId).pipe(
      map((response: any) => response.data[0])
    );
  }



  // private initData() {
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

  //   this.subjectsAndEnrollments$ = zip(this.subjects$, this.enrollments$).pipe(
  //     switchMap(([subjects, enrollments]) =>
  //       from(subjects).pipe(
  //         zip(from(enrollments)),
  //         map(([subject, enrollment]) => ({ subject, enrollment }))
  //       )
  //     )
  //   );
  // }

}
