/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Product_productInfo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProductsList_query$ref: FragmentReference;
export type ProductsList_query = {|
  +list_products: $ReadOnlyArray<?{|
    +$fragmentRefs: Product_productInfo$ref
  |}>,
  +$refType: ProductsList_query$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ProductsList_query",
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
          "name": "Product_productInfo",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '60e490ca4ac51a00e0a6fa6a218c06b8';
module.exports = node;
