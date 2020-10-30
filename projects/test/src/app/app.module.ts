import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { OrganizationHierarchyTreeComponent } from './organization-hierarchy-tree/organization-hierarchy-tree.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations:     [OrganizationHierarchyTreeComponent],
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
