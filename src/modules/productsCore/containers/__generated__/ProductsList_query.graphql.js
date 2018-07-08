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
  +featured_products: $ReadOnlyArray<?{|
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
      "name": "featured_products",
      "storageKey": "featured_products(taxon_id:99)",
      "args": [
        {
          "kind": "Literal",
          "name": "taxon_id",
          "value": 99,
          "type": "ID"
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
(node/*: any*/).hash = '64171389fda99630086e5bd4023eaf81';
module.exports = node;
