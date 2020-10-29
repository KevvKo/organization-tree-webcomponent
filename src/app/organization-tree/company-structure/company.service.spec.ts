import { TestBed } from '@angular/core/testing';

import { CompanyStructureService } from './company-structure.service';

describe('CompanyService', () => {
  let service: CompanyStructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyStructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
