/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type PlainProductsListEntry_plainProductInfo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PlainProductsList_query$ref: FragmentReference;
export type PlainProductsList_query = {|
  +list_products: $ReadOnlyArray<?{|
    +$fragmentRefs: PlainProductsListEntry_plainProductInfo$ref
  |}>,
  +$refType: PlainProductsList_query$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "PlainProductsList_query",
  "type": "Query",
  "metadata": null,
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
          "kind": "FragmentSpread",
          "name": "PlainProductsListEntry_plainProductInfo",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '91044d7ec7843a32f5054896462882ca';
module.exports = node;
