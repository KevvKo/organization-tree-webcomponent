import { Component, Input, OnInit } from '@angular/core';
import {OrganizationHierarchyTreeService} from './organization-hierarchy-tree.service';

@Component({
  selector: 'app-organization-hierarchy-tree',
  template: `
    <div class="organization-structure">{{organizationHierarchy[0].name}}</div>`,
  styleUrls: []
})
export class OrganizationHierarchyTreeComponent implements OnInit {


    constructor(private organizationHierarchyTreeService: OrganizationHierarchyTreeService) { }

    organizationHierarchy: {};

    ngOnInit(){
        this.getOrganizationHierarchy();
    }

    getOrganizationHierarchy() {
        this.organizationHierarchy = this.organizationHierarchyTreeService.getOrganizationHierarchy();
    }
}
