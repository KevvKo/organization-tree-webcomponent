import { Component,  OnInit } from '@angular/core';
import {OrganizationHierarchyTreeService} from './organization-hierarchy-tree.service';

import {TreeviewItem} from 'ngx-treeview';

@Component({
  selector: 'app-organization-hierarchy-tree',
  templateUrl: './organization-hierarchy-tree.component.html',
  styleUrls: ['./organization-hierarchy-tree.component.css']
})
export class OrganizationHierarchyTreeComponent implements OnInit {

      constructor(private organizationHierarchyTreeService: OrganizationHierarchyTreeService) { }

      items: TreeviewItem[];
      organizationHierarchy: TreeviewItem;

    ngOnInit(): void{

        this.getOrganizationHierarchy();

    }

    getOrganizationHierarchy(): void {
        this.items = this.organizationHierarchyTreeService.getOrganizationHierarchy();

    }

}
