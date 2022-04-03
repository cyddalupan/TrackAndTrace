import { TestBed } from '@angular/core/testing';

import { ReportSeverityService } from './report-severity.service';

describe('ReportSeverityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportSeverityService = TestBed.get(ReportSeverityService);
    expect(service).toBeTruthy();
  });
});
