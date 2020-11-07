import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { TreeviewModule } from 'ngx-treeview';
import { createCustomElement } from '@angular/elements';

import { OrganizationHierarchyTreeComponent } from './organization-hierarchy-tree/organization-hierarchy-tree.component';

@NgModule({
  declarations:     [OrganizationHierarchyTreeComponent],
  imports:          [BrowserModule, TreeviewModule.forRoot()],
  entryComponents:  [OrganizationHierarchyTreeComponent]
})

export class AppModule  implements DoBootstrap{

  constructor(private injector: Injector){

    const webComponent = createCustomElement(OrganizationHierarchyTreeComponent, {injector});
    customElements.define('organization-hierarchy-tree', webComponent);

  }

  ngDoBootstrap(): void {}
}
