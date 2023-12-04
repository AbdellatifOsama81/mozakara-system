import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnrollmentQuery } from 'src/app/core/interfaces/enrollment/enrollment-query';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getEnrollmentByStudentId(studentId: string): Observable<EnrollmentQuery[]> {
    return this.http.get<EnrollmentQuery[]>(`${this.apiServerUrl}/Enrollment?StudentId=${studentId}`);
  }
}
