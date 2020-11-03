import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.html']
})
export class TreeViewComponent implements OnInit {

  @Input() items;

  constructor() { }

  ngOnInit(): void { }

}
