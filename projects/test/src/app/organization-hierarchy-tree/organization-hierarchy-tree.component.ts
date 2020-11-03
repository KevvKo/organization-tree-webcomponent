import { Component,  OnInit } from '@angular/core';
import {OrganizationHierarchyTreeService} from './organization-hierarchy-tree.service';

@Component({
  selector: 'app-organization-hierarchy-tree',
  templateUrl: './organization-hierarchy-tree.component.html',
  styleUrls: ['./organization-hierarchy-tree.component.css']
})
export class OrganizationHierarchyTreeComponent implements OnInit {

    constructor(private organizationHierarchyTreeService: OrganizationHierarchyTreeService) { }
    
    organizationHierarchy: {};

    ngOnInit(){
        this.getOrganizationHierarchy()
    }

    getOrganizationHierarchy(): void {
        this.organizationHierarchy = this.organizationHierarchyTreeService.getOrganizationHierarchy();
    }

}
