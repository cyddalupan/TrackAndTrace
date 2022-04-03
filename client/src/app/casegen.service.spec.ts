import { TestBed } from '@angular/core/testing';

import { CasegenService } from './casegen.service';

describe('CasegenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CasegenService = TestBed.get(CasegenService);
    expect(service).toBeTruthy();
  });
});
