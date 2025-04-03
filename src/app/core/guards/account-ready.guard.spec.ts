import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { accountReadyGuard } from './account-ready.guard';

describe('accountReadyGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accountReadyGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
