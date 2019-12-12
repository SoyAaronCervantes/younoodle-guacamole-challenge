import { TestBed } from '@angular/core/testing';

import { ProcessDataRequestService } from './process-data-request.service';

describe('ProcessDataRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessDataRequestService = TestBed.get(ProcessDataRequestService);
    expect(service).toBeTruthy();
  });
});
