import { TestBed } from '@angular/core/testing';

import { CurrentStudentEnrollmentsService } from './current-student-enrollments.service';

describe('CurrentStudentEnrollmentsService', () => {
  let service: CurrentStudentEnrollmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentStudentEnrollmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
