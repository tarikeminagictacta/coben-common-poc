import { TestBed } from '@angular/core/testing';

import { CobenCommonPocService } from './coben-common-poc.service';

describe('CobenCommonPocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CobenCommonPocService = TestBed.get(CobenCommonPocService);
    expect(service).toBeTruthy();
  });
});
