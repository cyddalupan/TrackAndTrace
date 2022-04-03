import { TestBed } from '@angular/core/testing';

import { FbuserService } from './fbuser.service';

describe('FbuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FbuserService = TestBed.get(FbuserService);
    expect(service).toBeTruthy();
  });
});
