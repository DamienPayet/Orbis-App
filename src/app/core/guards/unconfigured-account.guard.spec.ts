import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { unconfiguredAccountGuard } from './unconfigured-account.guard';

describe('unconfiguredAccountGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => unconfiguredAccountGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
