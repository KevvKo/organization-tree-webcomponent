import {CompanyStructure} from './company-structure'

export const CompanyStructureMock: CompanyStructure =
{
  user: 'Kevin Klein',
  companyName: 'Mops AG',
  data:
    {
      type: 'node',
      id: 'OilCorp_Germany',
      attributes: {
        description: 'The engineering department of the Oil Corp organization',
        name: 'Engineering'
      },
      relationships: {
        childNodes: {
          data: [
            {
              type: 'node',
              id: 'OilCorp_Germany'
            }
          ]
        },
        organization: {
          data: {
            type: 'organization',
            id: 'example.org'
          }
        },
        parentNode: {
          data: {
            type: 'node',
            id: 'OilCorp_Germany'
          }
        }
      }
    }

}
