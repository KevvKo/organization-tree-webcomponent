import { Component, Input, OnInit } from '@angular/core';
import {OrganizationHierarchyTreeService} from './organization-hierarchy-tree.service';

@Component({
  selector: 'app-organization-hierarchy-tree',
  template: `
        <div class="organization-hierarchy-tree">
          <app-tree-view [children]="organizationHierarchy"></app-tree-view>
        </div>`,

  styles: []
})

export class OrganizationHierarchyTreeComponent implements OnInit {

    constructor(private organizationHierarchyTreeService: OrganizationHierarchyTreeService) { }

    organizationHierarchy: Array<object>;

    ngOnInit(): void{
        this.getOrganizationHierarchy();
    }

    getOrganizationHierarchy(): void {
        this.organizationHierarchy = this.organizationHierarchyTreeService.getOrganizationHierarchy();
    }
}
