import { Component,  Input,  OnInit, Output } from '@angular/core';
import {OrganizationHierarchyTreeService} from '../service/organization-hierarchy-tree.service';

import {TreeviewItem} from 'ngx-treeview';

@Component({
  selector: 'app-organization-hierarchy-tree',
  templateUrl: './organization-hierarchy-tree.component.html',
  styleUrls: ['./organization-hierarchy-tree.component.css']
})
export class OrganizationHierarchyTreeComponent implements OnInit {

    @Input()
    get data(): any{ return this._data; }
    set data(value: any){ this._data = value; }

    get items(): TreeviewItem[] { return this._items }
    set items(value: TreeviewItem[]) { this._items = value }

    private _data: any;
    private _items: TreeviewItem[];

    constructor(private service: OrganizationHierarchyTreeService) { }

    ngOnInit(): void{

        this.getTreeViewItem();
    }

    getTreeViewItem(): void {

        this.items = this.service.getTreeViewItem();
    }

}
