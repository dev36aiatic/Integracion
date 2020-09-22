import { TestBed } from '@angular/core/testing';

import { CheckgGuard } from './checkg.guard';

describe('CheckgGuard', () => {
  let guard: CheckgGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckgGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
