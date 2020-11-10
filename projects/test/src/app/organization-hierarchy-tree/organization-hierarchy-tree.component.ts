import { Component,  OnInit } from '@angular/core';
import {OrganizationHierarchyTreeService} from '../service/organization-hierarchy-tree.service';

import {TreeviewItem} from 'ngx-treeview';

@Component({
  selector: 'app-organization-hierarchy-tree',
  templateUrl: './organization-hierarchy-tree.component.html',
  styleUrls: ['./organization-hierarchy-tree.component.css']
})
export class OrganizationHierarchyTreeComponent implements OnInit {

      constructor(private service: OrganizationHierarchyTreeService) { }

      items: TreeviewItem[];
      organizationHierarchy: TreeviewItem;

    ngOnInit(): void{

        this.getTreeViewItem();

    }

    getTreeViewItem(): void {
        this.items = this.service.getTreeViewItem();

    }

}
