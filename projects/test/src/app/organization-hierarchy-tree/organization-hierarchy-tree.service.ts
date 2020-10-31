import { Injectable } from '@angular/core';
import json from './tree-mock.json';

@Injectable({
  providedIn: 'root'
})

export class OrganizationHierarchyTreeService {

  constructor() { }

  getOrganizationHierarchy() {
    return json;
  }
}
