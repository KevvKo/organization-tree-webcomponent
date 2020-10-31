import { Injectable, ɵConsole } from '@angular/core';
import json from './tree-mock.json';

@Injectable({
  providedIn: 'root'
})

export class OrganizationHierarchyTreeService {

  root: object[];

  constructor() {
    this.root = [];
    this.buildTree();
   }

  buildTree(): void{

    // 1. build a simple array, which contains less information
    const nodes = [];

    json.data.forEach(el => {

      const node = {
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

    let node = {
      name: null,
      parentId: null,
      children: []
    };

    for (let i = 0, l = nodes.length; i < l; i += 1) {
      map[nodes[i].id] = i; // initialize the map
    }

    for (let i = 0, l = nodes.length; i < l; i += 1) {

      node = nodes[i];

      if (node.parentId !== null) {

        nodes[map[node.parentId]].children.push(node);
      } else {

        this.root.push(node);
      }
    }
  }

  getOrganizationHierarchy(): {}{

    return this.root;
  }
}
