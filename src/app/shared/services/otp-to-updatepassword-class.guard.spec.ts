import { TestBed } from '@angular/core/testing';

import { OtpToUpdatepasswordClassGuard } from './otp-to-updatepassword-class.guard';

describe('OtpToUpdatepasswordClassGuard', () => {
  let guard: OtpToUpdatepasswordClassGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OtpToUpdatepasswordClassGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
