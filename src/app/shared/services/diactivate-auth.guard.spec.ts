import { TestBed } from '@angular/core/testing';

import { DiactivateAuthGuard } from './diactivate-auth.guard';

describe('DiactivateAuthGuard', () => {
  let guard: DiactivateAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DiactivateAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
