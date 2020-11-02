import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  template: `
    <ul >
      <li *ngFor="let item of items">
        {{item.name}}
        <app-tree-view [items]="item.children"></app-tree-view>
      </li>
    </ul>`,

  styles: []
})
export class TreeViewComponent implements OnInit {

  @Input() items;

  constructor() { }

  ngOnInit(): void { }

}
