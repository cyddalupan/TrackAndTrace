import { TestBed } from '@angular/core/testing';

import { UniqueChatService } from './uniquechat.service';

describe('UniqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniqueChatService = TestBed.get(UniqueChatService);
    expect(service).toBeTruthy();
  });
});
