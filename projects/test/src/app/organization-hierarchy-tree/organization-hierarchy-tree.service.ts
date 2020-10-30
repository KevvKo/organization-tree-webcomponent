import { Injectable } from '@angular/core';
import data from './tree-mock.json';

@Injectable({
  providedIn: 'root'
})

export class OrganizationHierarchyTreeService {

  constructor() { }

  getOrganizationHierarchy() {
    return data;
  }
}
