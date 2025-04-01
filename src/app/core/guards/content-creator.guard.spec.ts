import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { contentCreatorGuard } from './content-creator.guard';

describe('contentCreatorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => contentCreatorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
