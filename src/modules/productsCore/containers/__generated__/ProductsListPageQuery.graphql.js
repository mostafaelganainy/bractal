/**
 * @flow
 * @relayHash a46fc43d4204e41ffd0316ceff69b143
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProductsList_query$ref = any;
export type ProductsListPageQueryVariables = {||};
export type ProductsListPageQueryResponse = {|
  +$fragmentRefs: ProductsList_query$ref
|};
*/


/*
query ProductsListPageQuery {
  ...ProductsList_query
}

fragment ProductsList_query on Query {
  products {
    ...Product_productInfo
    id
  }
}

fragment Product_productInfo on Products {
  id
  name
  price
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "ProductsListPageQuery",
  "id": null,
  "text": "query ProductsListPageQuery {\n  ...ProductsList_query\n}\n\nfragment ProductsList_query on Query {\n  products {\n    ...Product_productInfo\n    id\n  }\n}\n\nfragment Product_productInfo on Products {\n  id\n  name\n  price\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ProductsListPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ProductsList_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProductsListPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "products",
        "storageKey": null,
        "args": null,
        "concreteType": "Products",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "price",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = 'dff49075cff85af76a95b94baef21a3a';
module.exports = node;
