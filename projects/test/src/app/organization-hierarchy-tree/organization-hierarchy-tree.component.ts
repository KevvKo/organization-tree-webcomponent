import { Component,  OnInit, ViewChild } from '@angular/core';
import {OrganizationHierarchyTreeService} from './organization-hierarchy-tree.service';

import {TreeviewItem, TreeviewComponent} from 'ngx-treeview';

@Component({
  selector: 'app-organization-hierarchy-tree',
  templateUrl: './organization-hierarchy-tree.component.html',
  styleUrls: ['./organization-hierarchy-tree.component.css']
})
export class OrganizationHierarchyTreeComponent implements OnInit {

      constructor(private organizationHierarchyTreeService: OrganizationHierarchyTreeService) { }

      items: TreeviewItem[];
      organizationHierarchy: TreeviewItem;
      config: {
        hasAllCheckBox: true,
        hasFilter: false,
        hasCollapseExpand: false,
        decoupleChildFromParent: false,
        maxHeight: 500
    }

    ngOnInit(){

        this.getOrganizationHierarchy();

    }

    getOrganizationHierarchy(): void {
        this.items = this.organizationHierarchyTreeService.getOrganizationHierarchy();

    }

}
