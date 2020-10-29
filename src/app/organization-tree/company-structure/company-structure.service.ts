import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {CompanyStructure} from './company-structure';
import {CompanyStructureMock} from './mock-company-structure';


@Injectable({
  providedIn: 'root'
})
export class CompanyStructureService {

  constructor() { }

  getCompanyStructure(): Observable <CompanyStructure>{
    return of (CompanyStructureMock);
  }
}
