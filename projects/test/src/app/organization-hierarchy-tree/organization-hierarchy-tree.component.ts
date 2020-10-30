import { Component, Input, OnInit } from '@angular/core';
import '../../../../../tree-mock.json';

const json = {
  "data": [
      {
          "type": "node",
          "id": "cb2de45e-41f8-1468-059e-78c88721236d",
          "attributes": {
              "name": "OilCorp Weimar"
          },
          "relationships": {
              "childNodes": {
                  "data": []
              },
              "organization": {
                  "data": {
                      "type": "organization",
                      "id": "OilCorp"
                  }
              },
              "parentNode": {
                  "data": {
                      "type": "node",
                      "id": "OilCorp_Germany"
                  }
              }
          }
      },
      {
          "type": "node",
          "id": "d090380c-6585-01f4-5c44-735f55a9f7cf",
          "attributes": {
              "name": "Test"
          },
          "relationships": {
              "childNodes": {
                  "data": []
              },
              "organization": {
                  "data": {
                      "type": "organization",
                      "id": "OilCorp"
                  }
              },
              "parentNode": {
                  "data": {
                      "type": "node",
                      "id": "OilCorp_Berlin"
                  }
              }
          }
      },
      {
          "type": "node",
          "id": "OilCorp_France",
          "attributes": {
              "description": "The French division of Oil Corp.",
              "name": "Oil Corp France"
          },
          "relationships": {
              "childNodes": {
                  "data": [
                      {
                          "type": "node",
                          "id": "OilCorp_Paris"
                      }
                  ]
              },
              "organization": {
                  "data": {
                      "type": "organization",
                      "id": "OilCorp"
                  }
              },
              "parentNode": {
                  "data": {
                      "type": "node",
                      "id": "OilCorp_Root"
                  }
              }
          }
      },
      {
          "type": "node",
          "id": "OilCorp_Jena",
          "attributes": {
              "description": "The Jena headquarter of Oil Corp.",
              "name": "Oil Corp Jena"
          },
          "relationships": {
              "childNodes": {
                  "data": []
              },
              "organization": {
                  "data": {
                      "type": "organization",
                      "id": "OilCorp"
                  }
              },
              "parentNode": {
                  "data": {
                      "type": "node",
                      "id": "OilCorp_Germany"
                  }
              }
          }
      },
      {
          "type": "node",
          "id": "OilCorp_Germany",
          "attributes": {
              "description": "The German division of Oil Corp.",
              "name": "Oil Corp Germany"
          },
          "relationships": {
              "childNodes": {
                  "data": [
                      {
                          "type": "node",
                          "id": "cb2de45e-41f8-1468-059e-78c88721236d"
                      },
                      {
                          "type": "node",
                          "id": "OilCorp_Jena"
                      },
                      {
                          "type": "node",
                          "id": "OilCorp_Berlin"
                      }
                  ]
              },
              "organization": {
                  "data": {
                      "type": "organization",
                      "id": "OilCorp"
                  }
              },
              "parentNode": {
                  "data": {
                      "type": "node",
                      "id": "OilCorp_Root"
                  }
              }
          }
      },
      {
          "type": "node",
          "id": "OilCorp_Root",
          "attributes": {
              "description": "The company root node of Oil Corp.",
              "name": "Oil Corp Root"
          },
          "relationships": {
              "childNodes": {
                  "data": [
                      {
                          "type": "node",
                          "id": "OilCorp_France"
                      },
                      {
                          "type": "node",
                          "id": "OilCorp_Germany"
                      }
                  ]
              },
              "organization": {
                  "data": {
                      "type": "organization",
                      "id": "OilCorp"
                  }
              },
              "parentNode": {
                  "data": null
              }
          }
      },
      {
          "type": "node",
          "id": "OilCorp_Paris",
          "attributes": {
              "description": "The Paris headquarter of Oil Corp.",
              "name": "Oil Corp Paris"
          },
          "relationships": {
              "childNodes": {
                  "data": []
              },
              "organization": {
                  "data": {
                      "type": "organization",
                      "id": "OilCorp"
                  }
              },
              "parentNode": {
                  "data": {
                      "type": "node",
                      "id": "OilCorp_France"
                  }
              }
          }
      },
      {
          "type": "node",
          "id": "OilCorp_Berlin",
          "attributes": {
              "description": "The Berlin headquarter of Oil Corp.",
              "name": "Oil Corp Berlin"
          },
          "relationships": {
              "childNodes": {
                  "data": [
                      {
                          "type": "node",
                          "id": "d090380c-6585-01f4-5c44-735f55a9f7cf"
                      }
                  ]
              },
              "organization": {
                  "data": {
                      "type": "organization",
                      "id": "OilCorp"
                  }
              },
              "parentNode": {
                  "data": {
                      "type": "node",
                      "id": "OilCorp_Germany"
                  }
              }
          }
      }
  ]
}


@Component({
  selector: 'app-organization-hierarchy-tree',
  templateUrl: './organization-hierarchy-tree.component.html',
  styleUrls: ['./organization-hierarchy-tree.component.css']
})
export class OrganizationHierarchyTreeComponent implements OnInit {

  @Input() data = json.data;

  constructor() { }

  ngOnInit(): void {
  }

}
