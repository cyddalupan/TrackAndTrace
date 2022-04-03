import { TestBed } from '@angular/core/testing';

import { CategoryKeywordService } from './category-keyword.service';

describe('CategoryKeywordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryKeywordService = TestBed.get(CategoryKeywordService);
    expect(service).toBeTruthy();
  });
});
