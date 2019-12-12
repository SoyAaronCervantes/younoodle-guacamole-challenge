import { TestBed } from '@angular/core/testing';

import { NumberIndustryStartupService } from './number-industry-startup.service';

describe('NumberIndustryStartupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumberIndustryStartupService = TestBed.get(NumberIndustryStartupService);
    expect(service).toBeTruthy();
  });
});
