import { Component, OnInit } from '@angular/core';
import {CompanyStructure} from './company-structure/company-structure';
import {CompanyStructureService} from './company-structure/company-structure.service'
import {CompanyStructureMock} from './company-structure/mock-company-structure';

@Component({
  selector: 'app-organization-tree',
  templateUrl: './organization-tree.component.html',
  styleUrls: ['./organization-tree.component.css']
})

export class OrganizationTreeComponent implements OnInit {

  constructor(private companyStructureService: CompanyStructureService) {}
  company = null;

  ngOnInit(): void {
    this.getCompanyStructure();
  }

  getCompanyStructure(): void {

    this.companyStructureService.getCompanyStructure()
    .subscribe(companyStructure => this.company = companyStructure );
  }
}
