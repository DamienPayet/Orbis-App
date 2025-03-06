import { TestBed } from '@angular/core/testing';

import { AuthenticationManagerService } from './authentication-manager.service';

describe('AuthenticationManagerService', () => {
  let service: AuthenticationManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
