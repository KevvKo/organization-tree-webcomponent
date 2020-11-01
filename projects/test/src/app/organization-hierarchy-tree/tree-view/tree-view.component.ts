import { Component, Input, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-tree-view',
  template: `
    <ul >
      <li *ngFor="let node of children">
        {{node.name}}
        <app-tree-view [children]="node.children"></app-tree-view>
      </li>
    </ul>`,

  styleUrls: []
})
export class TreeViewComponent implements OnInit {

  @Input() children;

  constructor() { }

  ngOnInit(): void { }

}
