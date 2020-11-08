import { TestBed } from '@angular/core/testing';

import { OrganizationHierarchyTreeService } from './organization-hierarchy-tree.service';

describe('OrganizationHierarchyTreeService', () => {
  let service: OrganizationHierarchyTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationHierarchyTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
