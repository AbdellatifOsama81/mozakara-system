import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StudySubject } from 'src/app/core/interfaces/learning-resources/study-subject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getSubject(id?: string): Observable<StudySubject[]> {
    if (id == null) {
      return this.http.get<StudySubject[]>(`${this.apiServerUrl}/subject`);
    }
    return this.http.get<StudySubject[]>(`${this.apiServerUrl}/subject?Id=${id}`);
  }
  // public getSubjectsByStudyLevelId(studyLevelId?: string): Observable<StudySubject[]> {
  //   return this.http.get<StudySubject[]>(`${this.apiServerUrl}/subject?StudyLevelId=${studyLevelId}`);
  // }
  public getSubjectsByStudentId(studentId: string): Observable<StudySubject[]> {
    return this.http.get<StudySubject[]>(`${this.apiServerUrl}/subject?StudentId=${studentId}`);
  }
}
