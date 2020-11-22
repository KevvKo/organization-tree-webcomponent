import { Injectable} from '@angular/core';
import { TreeItem, TreeviewItem } from 'ngx-treeview';

import {Node, NodeTree} from '../model/node.model';
import json from '../../../../../tree-mock.json';
@Injectable({
  providedIn: 'root'
})

export class OrganizationHierarchyTreeService {

  private item: TreeItem;
  public data: any;

  constructor() {}

  buildTree(): void{

    // 1. build a simple array, which contains less information

    const nodes: NodeTree[] = [];
    const treeItems: TreeItem[] = [];

    this.data.forEach(el => {

      const nodeElement: Node = {
        id:     el.id,
        name:   el.attributes.name ?? 'unknwown',
        description: el.attributes.description ?? 'unknown',
        organization: el.relationships.organization.data.id
      };

      const nodeTree: NodeTree = {
        id:     el.id,
        node:   nodeElement,
        parentId: !el.relationships.parentNode.data
        ? 'unknown'
        : el.relationships.parentNode.data.id,
        children: []
      };

      const item = this.mapTreeViewItem(nodeElement);

      treeItems.push(item);
      nodes.push(nodeTree);
    });

    const mapIds = {};

    // initialize the map for the correct assignment
    for (let i = 0, l = nodes.length; i < l; i += 1) {
      mapIds[nodes[i].id] = i;
    }

    // creating the organization hierarchy-tree as object
    for (let i = 0, l = nodes.length; i < l; i += 1) {

      const nodeTree: NodeTree = nodes[i];
      const treeItem: TreeItem = treeItems[i];

      if (nodeTree.parentId !== 'unknown') {

        treeItems[mapIds[nodeTree.parentId]].children.push(treeItem);

      } else {

        this.item = treeItem;
      }
    }
  }

  mapTreeViewItem(node: Node): TreeItem {

    return {
      text: node.name ?? 'unknown',
      value: node,
      collapsed: false,
      children: [],
      checked: false,
      disabled: false,
    };
  }

  setData(val: any): void{
    this.data = val.data
  }

  getTreeViewItem(): TreeviewItem[]{

    return [new TreeviewItem( this.item)];
  }
}
