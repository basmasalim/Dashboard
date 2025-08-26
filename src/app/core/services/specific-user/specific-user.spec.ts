import { TestBed } from '@angular/core/testing';

import { SpecificUser } from './specific-user';

describe('SpecificUser', () => {
  let service: SpecificUser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecificUser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
