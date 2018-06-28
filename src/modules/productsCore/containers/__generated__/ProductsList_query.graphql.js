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
  +products: $ReadOnlyArray<?{|
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
      "name": "products",
      "storageKey": null,
      "args": null,
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
(node/*: any*/).hash = 'fa451e88e99572165c07e00ca009d0c1';
module.exports = node;
