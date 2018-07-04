/**
 * @flow
 * @relayHash 087df9829b995d3bf31c4a6bca0e0cef
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PlainProductsList_query$ref = any;
export type PlainProductsListPageQueryVariables = {||};
export type PlainProductsListPageQueryResponse = {|
  +$fragmentRefs: PlainProductsList_query$ref
|};
*/


/*
query PlainProductsListPageQuery {
  ...PlainProductsList_query
}

fragment PlainProductsList_query on Query {
  list_products(taxon_id: 99) {
    ...PlainProductsListEntry_plainProductInfo
    id
  }
}

fragment PlainProductsListEntry_plainProductInfo on Product {
  id
  name
  price
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "PlainProductsListPageQuery",
  "id": null,
  "text": "query PlainProductsListPageQuery {\n  ...PlainProductsList_query\n}\n\nfragment PlainProductsList_query on Query {\n  list_products(taxon_id: 99) {\n    ...PlainProductsListEntry_plainProductInfo\n    id\n  }\n}\n\nfragment PlainProductsListEntry_plainProductInfo on Product {\n  id\n  name\n  price\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PlainProductsListPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "PlainProductsList_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PlainProductsListPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "list_products",
        "storageKey": "list_products(taxon_id:99)",
        "args": [
          {
            "kind": "Literal",
            "name": "taxon_id",
            "value": 99,
            "type": "Int"
          }
        ],
        "concreteType": "Product",
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
(node/*: any*/).hash = '462d7bd7148d6c356f8b74fbc3abd57f';
module.exports = node;
