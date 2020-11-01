import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { OrganizationHierarchyTreeComponent } from './organization-hierarchy-tree/organization-hierarchy-tree.component';
import { createCustomElement } from '@angular/elements';
import { TreeViewComponent } from './organization-hierarchy-tree/tree-view/tree-view.component';

@NgModule({
  declarations:     [OrganizationHierarchyTreeComponent, TreeViewComponent],
  imports:          [BrowserModule],
  entryComponents:  [OrganizationHierarchyTreeComponent]
})

export class AppModule  implements DoBootstrap{

  constructor(private injector: Injector){

    const webComponent = createCustomElement(OrganizationHierarchyTreeComponent, {injector});
    customElements.define('organization-hierarchy-tree', webComponent);

  }

  ngDoBootstrap() {}
}
