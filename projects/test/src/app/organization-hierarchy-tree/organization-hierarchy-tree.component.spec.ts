import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationHierarchyTreeComponent } from './organization-hierarchy-tree.component';

describe('OrganizationHierarchyTreeComponent', () => {
  let component: OrganizationHierarchyTreeComponent;
  let fixture: ComponentFixture<OrganizationHierarchyTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationHierarchyTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationHierarchyTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
