import { TestBed } from '@angular/core/testing';

import { VerifyReportService } from './verify-report.service';

describe('VerifyReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerifyReportService = TestBed.get(VerifyReportService);
    expect(service).toBeTruthy();
  });
});
