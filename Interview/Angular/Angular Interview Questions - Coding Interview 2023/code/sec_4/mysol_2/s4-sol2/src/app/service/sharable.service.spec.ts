import { TestBed } from '@angular/core/testing';

import { SharableService } from './sharable.service';

describe('SharableService', () => {
  let service: SharableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
