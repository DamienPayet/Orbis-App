import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { agencyGuard } from './agency.guard';

describe('agencyGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => agencyGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
