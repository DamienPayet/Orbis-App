import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { modelGuard } from './model.guard';

describe('modelGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => modelGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
