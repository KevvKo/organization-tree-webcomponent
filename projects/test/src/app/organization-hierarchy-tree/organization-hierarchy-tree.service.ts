import { Injectable, ɵConsole } from '@angular/core';
import {Node} from './node';
import json from './tree-mock.json';

@Injectable({
  providedIn: 'root'
})

export class OrganizationHierarchyTreeService {

  root: Array<object> = [];

  constructor() {
    this.buildTree();
   }

  buildTree(): void{

    // 1. build a simple array, which contains less information
    const nodes: Array<Node> = [];

    json.data.forEach(el => {

      const node: Node = {
        id:     el.id,
        name:   el.attributes.name,
        parentId: null,
        children: []
      };

      if (el.relationships.parentNode.data !== null) {

        node.parentId = el.relationships.parentNode.data.id;
      }

      nodes.push(node);
    });


    const map = {
      id: null
    };

    // initialize the map for the correct assignment
    for (let i = 0, l = nodes.length; i < l; i += 1) {
      map[nodes[i].id] = i;
    }

    // creating the organization hierarchy-tree as object
    for (let i = 0, l = nodes.length; i < l; i += 1) {

      const node: Node = nodes[i];

      if (node.parentId !== null) {

        nodes[map[node.parentId]].children.push(node);
      } else {

        this.root.push(node);
      }
    }
  }

  getOrganizationHierarchy(): Array<object>{

    return this.root;
  }
}
