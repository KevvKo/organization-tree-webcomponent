import { Component,  Input,  OnInit, Output } from '@angular/core';
import {OrganizationHierarchyTreeService} from '../service/organization-hierarchy-tree.service';

import {TreeviewItem} from 'ngx-treeview';

@Component({
  selector: 'app-organization-hierarchy-tree',
  templateUrl: './organization-hierarchy-tree.component.html',
  styleUrls: ['./organization-hierarchy-tree.component.css']
})
export class OrganizationHierarchyTreeComponent implements OnInit {

    @Input() public _data: any;
    @Input()
    get data(){ return this._data; }
    set data(val: any){ this._data = val;}

    private _items: TreeviewItem[];
    get items(): TreeviewItem[] { return this._items; }
    set items(value: TreeviewItem[]) { this._items = value; }

    constructor(private service: OrganizationHierarchyTreeService) { }

    ngOnInit(): void{

      this.service.data = this._data;
      this.service.buildTree();
      this.getTreeViewItem();

    }

    getTreeViewItem(): void {

        this.items = this.service.getTreeViewItem();
    }
}
